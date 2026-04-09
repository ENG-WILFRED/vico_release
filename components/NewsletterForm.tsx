"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/app/actions/newsletter";

interface NewsletterFormProps {
  onSuccess?: () => void;
}

export function NewsletterForm({ onSuccess }: NewsletterFormProps = {}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const result = await subscribeNewsletter(email);

      if (result.success) {
        setMessage({ type: "success", text: result.message || "Subscribed successfully!" });
        setEmail("");
        // Call onSuccess callback after a short delay
        setTimeout(() => {
          onSuccess?.();
        }, 1500);
      } else {
        setMessage({ type: "error", text: result.error || "Subscription failed" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "An unexpected error occurred" });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          background: "#040a06",
          border: "1px solid #00e87a33",
          color: "#ffffff",
          padding: "12px 16px",
          borderRadius: "2px",
          fontSize: "clamp(13px,1.2vw,14px)",
          outline: "none",
        }}
        className="w-full focus:border-[#00e87a] transition-colors placeholder:text-[#304838]"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          background: loading ? "#00a054" : "#00e87a",
          color: "#040a06",
          fontWeight: 800,
          letterSpacing: "2px",
          padding: "12px 24px",
          borderRadius: "2px",
          border: "none",
          fontSize: "12px",
          whiteSpace: "nowrap",
          opacity: loading ? 0.7 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
        className="w-full sm:w-auto hover:opacity-90 transition-opacity"
      >
        {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
      </button>
      {message && (
        <p
          style={{
            color: message.type === "success" ? "#00e87a" : "#ff6b6b",
            fontSize: "13px",
            marginTop: "8px",
          }}
        >
          {message.text}
        </p>
      )}
    </form>
  );
}
