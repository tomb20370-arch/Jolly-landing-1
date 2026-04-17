import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import axios from "axios";
import crypto from "crypto";

import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Facebook Conversions API Endpoint
  app.post("/api/fb-purchase", async (req, res) => {
    const { event_name, event_id, event_source_url, client_user_agent, user_data, custom_data } = req.body;

    const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
    const FB_PIXEL_ID = process.env.FB_PIXEL_ID;

    if (!FB_ACCESS_TOKEN || !FB_PIXEL_ID) {
      console.warn("FB_ACCESS_TOKEN or FB_PIXEL_ID is missing in environment variables.");
      return res.status(200).json({ 
        success: false, 
        error: "Facebook API configuration is missing. Please ensure FB_ACCESS_TOKEN and FB_PIXEL_ID are set in the Secrets panel." 
      });
    }

    const final_event_id = event_id || crypto.randomUUID();
    const event_time = Math.floor(Date.now() / 1000);
    
    // Get client IP address
    const client_ip_address = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const payload = {
      data: [
        {
          event_name: event_name || "Purchase",
          event_time: event_time,
          event_id: final_event_id,
          event_source_url: event_source_url,
          action_source: "website",
          user_data: {
            client_ip_address: Array.isArray(client_ip_address) ? client_ip_address[0] : client_ip_address,
            client_user_agent: client_user_agent,
            ...user_data
          },
          custom_data: {
            currency: "USD",
            value: 1.00,
            ...custom_data
          }
        }
      ],
      test_event_code: process.env.FB_TEST_EVENT_CODE // Add this line
    };

    try {
      const response = await axios.post(
        `https://graph.facebook.com/v17.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
        payload
      );
      console.log("Facebook CAPI Success:", response.data);
      res.json({ success: true, fb_response: response.data });
    } catch (error: any) {
      const errorData = error.response?.data || error.message;
      console.error("Facebook CAPI Error:", JSON.stringify(errorData, null, 2));
      res.status(500).json({ success: false, error: errorData });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting Vite in development mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // Changed to custom for manual HTML serving
    });
    app.use(vite.middlewares);

    app.get("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        // 1. Read index.html
        let template = fs.readFileSync(
          path.resolve(__dirname, "index.html"),
          "utf-8",
        );

        // 2. Apply Vite HTML transforms
        template = await vite.transformIndexHtml(url, template);

        // 3. Send the rendered HTML back
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
