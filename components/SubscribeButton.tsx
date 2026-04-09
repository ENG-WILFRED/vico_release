"use client";

import { useSubscribe } from "./SubscribeContext";

export function SubscribeButton() {
  const { openModal } = useSubscribe();

  const handleScroll = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
      // Open modal after scroll completes
      setTimeout(() => {
        openModal();
      }, 100);
    }
  };

  return (
    <button
      onClick={handleScroll}
      style={{
        background: "#00e87a",
        color: "#040a06",
        fontWeight: 800,
        letterSpacing: "2px",
        padding: "14px 36px",
        borderRadius: "2px",
        border: "none",
        cursor: "pointer",
      }}
      className="text-sm hover:opacity-90 transition-opacity"
    >
      Subscribe
    </button>
  );
}
