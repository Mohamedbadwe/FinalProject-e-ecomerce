"use client";

import { useState } from "react";

type Message = {
  text: string;
  sender: "user" | "bot";
};

type Option = {
  label: string;
  next: string;
};

const flow: Record<string, { text: string; options?: Option[] }> = {
  start: {
    text: "Welcome 👋 Choose an option:",
    options: [
      { label: "Products 🛍️", next: "products" },
      { label: "Prices 💰", next: "prices" },
      { label: "Support 📞", next: "support" },
    ],
  },

  products: {
    text: "We have phones, laptops, and accessories 🔥",
    options: [{ label: "Back", next: "start" }],
  },

  prices: {
    text: "Prices start from 100$ 💰",
    options: [{ label: "Back", next: "start" }],
  },

  support: {
    text: "Contact us at support@email.com 📩",
    options: [{ label: "Back", next: "start" }],
  },
};

export default function Home() {
  const [chat, setChat] = useState<Message[]>([
    { text: flow.start.text, sender: "bot" },
  ]);

  const [currentOptions, setCurrentOptions] = useState<Option[]>(
    flow.start.options || []
  );

  const handleOptionClick = (option: Option) => {
    const nextStep = flow[option.next];

    const userMsg: Message = {
      text: option.label,
      sender: "user",
    };

    const botMsg: Message = {
      text: nextStep.text,
      sender: "bot",
    };

    setChat((prev) => [...prev, userMsg, botMsg]);
    setCurrentOptions(nextStep.options || []);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-green-600 text-white p-4 text-center font-bold">
        Chatbot
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs text-sm shadow
              ${
                msg.sender === "user"
                  ? "bg-green-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-white border-t flex flex-wrap gap-2">
        {currentOptions.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(opt)}
            className="bg-blue-100 text-green-700 px-3 py-1 rounded-full hover:bg-blue-200 text-sm"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}