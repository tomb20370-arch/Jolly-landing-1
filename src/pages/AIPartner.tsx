import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Bot, Brain, Zap, Globe, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleGenAI } from "@google/genai";
import { useTranslation } from "react-i18next";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function AIPartner() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  // Initialize chat and welcome message
  useEffect(() => {
    const welcomeMsg: Message = {
      id: "welcome",
      role: "assistant",
      content: t('aiPartner.chat.welcome'),
    };
    setMessages([welcomeMsg]);

    chatRef.current = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: t('aiPartner.chat.systemInstruction'),
      },
    });
  }, [i18n.language, t]); // Re-initialize if language changes

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({
        message: input,
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.text || t('aiPartner.chat.error'),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: t('aiPartner.chat.connectionError'),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    const welcomeMsg: Message = {
      id: Date.now().toString(),
      role: "assistant",
      content: t('aiPartner.chat.welcome'),
    };
    setMessages([welcomeMsg]);
    chatRef.current = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: t('aiPartner.chat.systemInstruction'),
      },
    });
  };

  return (
    <div className="pt-32 md:pt-40 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest"
          >
            <Sparkles className="h-4 w-4" />
            <span>{t('aiPartner.badge')}</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            {t('aiPartner.title')} <span className="text-primary">{t('aiPartner.titleSuffix')}</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t('aiPartner.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[600px]">
            <div className="p-6 border-b bg-slate-50/50 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900">{t('aiPartner.chat.title')}</h3>
                  <div className="flex items-center text-xs text-accent font-bold">
                    <div className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
                    {t('aiPartner.chat.status')}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-xl" onClick={handleReset}>
                <RefreshCcw className="h-5 w-5 text-slate-400" />
              </Button>
            </div>

            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 scroll-smooth">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] p-5 rounded-[2rem] ${
                      msg.role === "user" 
                        ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20" 
                        : "bg-slate-100 text-slate-800 rounded-tl-none"
                    }`}>
                      <p className="text-lg leading-relaxed">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 p-5 rounded-[2rem] rounded-tl-none flex space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75" />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150" />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSendMessage} className="p-6 border-t bg-slate-50/50 flex items-center space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('aiPartner.chat.placeholder')}
                className="flex-grow h-14 px-6 rounded-2xl border-none bg-white shadow-inner focus:ring-2 focus:ring-primary transition-all text-lg"
              />
              <Button type="submit" disabled={isLoading} className="h-14 w-14 rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                <Send className="h-6 w-6" />
              </Button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl space-y-6">
              <h3 className="text-2xl font-black text-slate-900">{t('aiPartner.howItWorks.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('aiPartner.howItWorks.desc')}
              </p>
              <div className="space-y-4">
                {[
                  { key: 'feedback', icon: Zap, color: "text-amber-500 bg-amber-50" },
                  { key: 'availability', icon: Globe, color: "text-blue-500 bg-blue-50" },
                  { key: 'adaptive', icon: Brain, color: "text-purple-500 bg-purple-50" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-slate-700">{t(`aiPartner.howItWorks.items.${item.key}`)}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t">
                <p className="text-xs text-slate-400 font-medium">
                  {t('aiPartner.howItWorks.note')}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-accent text-white shadow-xl space-y-4">
              <h4 className="font-black text-xl uppercase tracking-widest">{t('aiPartner.proTip.title')}</h4>
              <p className="font-medium leading-relaxed">
                {t('aiPartner.proTip.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
