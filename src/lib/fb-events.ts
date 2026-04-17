/**
 * Utility to send events to the Facebook Conversions API via the backend.
 * Also fires the browser-side Pixel for deduplication.
 */
export async function trackFBPurchase(
  eventName: string = "Purchase", 
  customData: any = {},
  userData: any = {}
) {
  // Generate a unique event ID for deduplication
  const eventId = `event_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  // 1. Fire Browser-side Pixel (if available)
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', eventName, {
      ...customData,
      currency: "USD",
      value: 1.00
    }, { eventID: eventId });
    console.log(`[FB Browser] Event "${eventName}" fired.`);
  }

  // 2. Fire Server-side CAPI
  try {
    const response = await fetch("/api/fb-purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId, // Send same ID for deduplication
        event_source_url: window.location.href,
        client_user_agent: navigator.userAgent,
        user_data: userData,
        custom_data: customData,
      }),
    });

    const result = await response.json();
    if (!result.success) {
      console.warn("[FB CAPI Warning]:", result.error);
    } else {
      console.log("[FB CAPI Success]:", result.fb_response);
    }
  } catch (error) {
    console.error("[FB CAPI Error]:", error);
  }
}
