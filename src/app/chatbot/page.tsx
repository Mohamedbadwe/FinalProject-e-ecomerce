"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Option = {
  label: string;
  next: string;
};

type FlowNode = {
  text: React.ReactNode;
  options?: Option[];
};

type Message = {
  text: React.ReactNode;
  sender: "user" | "bot";
};
const flow: Record<string, FlowNode> = {
  start: {
    text: "👋 Welcome to Fresh Cart! How can I help you?",
    options: [
      { label: "🛍️ Products", next: "products" },
      { label: "🔥 Offers", next: "offers" },
      { label: "📦 Orders", next: "orders" },
      { label: "🚚 Shipping", next: "shipping" },
      { label: "📞 Support", next: "support" },
    ],
  },

  products: {
    text: "Choose a category:",
    options: [
      // { label: "📱 Phones", next: "phones" },
      { label: "Mens fashion", next: "Mensfashion" },
      { label: "🎧 Electronics", next: "electronics" },
      { label: "⌚ Accessories", next: "accessories" },
      { label: "⬅️ Back", next: "start" },
    ],
  },

  phones: {
    text: <Link href="/category/phones">Browse Phones 📱</Link>,
    options: [{ label: "⬅️ Back", next: "products" }],
  },

  Mensfashion : {
    text: <Link href="/categories/men's-fashion">Mens fashion </Link>,
    options: [{ label: "⬅️ Back", next: "products" }],
  },

  electronics: {
    text: <Link href="/categories/electronics">Browse Electronics 🎧</Link>,
    options: [{ label: "⬅️ Back", next: "products" }],
  },

  accessories: {
    text: (
      <Link href="/categories/women's-fashion">
        Browse Accessories ⌚
      </Link>
    ),
    options: [{ label: "⬅️ Back", next: "products" }],
  },

  offers: {
    text: "🔥 Check our latest discounts and special offers!",
    options: [{ label: "⬅️ Back", next: "start" }],
  },

  orders: {
    text: "📦 What would you like to do?",
    options: [
      { label: "Track Order", next: "track" },
      { label: "Return Product", next: "return" },
      { label: "⬅️ Back", next: "start" },
    ],
  },

  track: {
    text: "🔍 Enter your order number to track it.",
    options: [{ label: "⬅️ Back", next: "orders" }],
  },

  return: {
    text: "↩️ Products can be returned within 14 days.",
    options: [{ label: "⬅️ Back", next: "orders" }],
  },

  shipping: {
    text: "🚚 Shipping information:",
    options: [
      { label: "Shipping Cost", next: "cost" },
      { label: "Delivery Time", next: "time" },
      { label: "⬅️ Back", next: "start" },
    ],
  },

  cost: {
    text: "💰 Shipping starts from $5.",
    options: [{ label: "⬅️ Back", next: "shipping" }],
  },

  time: {
    text: "⏳ Delivery takes 2 - 5 business days.",
    options: [{ label: "⬅️ Back", next: "shipping" }],
  },

  support: {
    text: "📞 Contact us at support@email.com",
    options: [
      { label: "Working Hours", next: "hours" },
      { label: "Email Support", next: "email" },
      { label: "⬅️ Back", next: "start" },
    ],
  },

  hours: {
    text: "🕒 We are available from 9 AM to 10 PM.",
    options: [{ label: "⬅️ Back", next: "support" }],
  },

  email: {
    text: "📩 support@email.com",
    options: [{ label: "⬅️ Back", next: "support" }],
  },
};

export default function Home(props: { params: string }) {
  useEffect(() => {
    document.title = "Chatbot";
  });
  const [chat, setChat] = useState<Message[]>([
    { text: flow.start.text, sender: "bot" },
  ]);

  const [currentOptions, setCurrentOptions] = useState<Option[]>(
    flow.start.options || [],
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
    <div className="flex flex-col h-screen bg-gray-100 w-[50%] mx-auto">
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
