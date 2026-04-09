"use client";

import { useState, useEffect } from "react";
import { NewsletterForm } from "./NewsletterForm";
import { useSubscribe } from "./SubscribeContext";

export function SubscribeModal() {
  const { isOpen, openModal, closeModal } = useSubscribe();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => openModal()}
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

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 9999,
          }}
          onClick={() => closeModal()}
        >
          {/* Modal Content */}
          <div
            className="bg-[#020805] rounded-lg p-8 max-w-md w-full border border-[#00e87a33]"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderTop: "3px solid #00e87a",
              position: "relative",
              margin: 0,
            }}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <h3
                style={{ fontWeight: 900, color: "#ffffff", letterSpacing: "2px" }}
                className="text-2xl"
              >
                Subscribe
              </h3>
              <button
                onClick={() => closeModal()}
                className="text-2xl text-[#00e87a] hover:opacity-75 transition-opacity"
              >
                ✕
              </button>
            </div>

            {/* Subtitle */}
            <p style={{ color: "#64a078", marginBottom: "6px", fontSize: "13px" }}>
              Get launch announcements and exclusive early access.
            </p>
            <p
              style={{
                color: "#00e87a",
                fontWeight: 700,
                marginBottom: "20px",
                fontSize: "12px",
              }}
            >
              Subscribe for free — No spam, no commitments.
            </p>

            {/* Form */}
            <NewsletterForm onSuccess={() => {
              closeModal();
              setShowToast(true);
            }} />
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showToast && (
        <div 
          className="fixed bottom-4 right-4 animate-in fade-in slide-in-from-bottom-4 duration-300"
          style={{ zIndex: 10000 }}
        >
          <div
            style={{
              background: "#00e87a",
              color: "#040a06",
              padding: "14px 24px",
              borderRadius: "4px",
              fontWeight: 700,
              letterSpacing: "1px",
              fontSize: "13px",
            }}
          >
            ✓ Subscribed successfully!
          </div>
        </div>
      )}
    </>
  );
}
