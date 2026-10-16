"use client";

import { useEffect, useState, type FormEvent } from "react";
import { MessageCircle, X } from "lucide-react";
import { hasRealWhatsApp, site, whatsappLink } from "@/data/site";
import { useApp } from "./AppProvider";

export default function QuoteModal() {
  const { quoteOpen, quoteProduct, closeQuote } = useApp();
  if (!quoteOpen) return null;
  return <QuoteForm product={quoteProduct} onClose={closeQuote} />;
}

type Errors = { name?: string; contact?: string };

function QuoteForm({ product, onClose }: { product: string; onClose: () => void }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState(product);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opened" | "no-number">("idle");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    const c = contact.trim();
    if (name.trim().length < 2) next.name = "Please enter your name.";
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
    const isPhone = /^\+?[\d\s-]{7,}$/.test(c);
    if (!isEmail && !isPhone) next.contact = "Please enter a valid phone number or email.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!hasRealWhatsApp()) {
      setStatus("no-number");
      return;
    }
    const text =
      `Hello ${site.name}, I would like to enquire.\n` +
      `Name: ${name.trim()}\nContact: ${c}\n` +
      (interest.trim() ? `Product: ${interest.trim()}\n` : "") +
      (message.trim() ? `Message: ${message.trim()}` : "");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setStatus("opened");
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-[#D9D3C4] bg-white px-3 py-2.5 text-sm text-[#071C35] placeholder:text-[#9AA3AF]";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#06172B]/70 p-0 sm:items-center sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        className="max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-white p-5 shadow-xl sm:rounded-2xl sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="quote-title" className="font-display text-xl font-semibold text-[#071C35]">
              {product ? "Product Enquiry" : "Get a Quote"}
            </h2>
            <p className="mt-1 text-xs text-[#6F7A88]">Fill in your details and send us your enquiry on WhatsApp.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-[#F8F6F1]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
          <div>
            <label htmlFor="q-name" className="text-sm font-medium text-[#071C35]">Your name *</label>
            <input
              id="q-name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "q-name-err" : undefined}
              className={inputClass}
              autoComplete="name"
            />
            {errors.name && <p id="q-name-err" className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="q-contact" className="text-sm font-medium text-[#071C35]">Phone or email *</label>
            <input
              id="q-contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              aria-invalid={!!errors.contact}
              aria-describedby={errors.contact ? "q-contact-err" : undefined}
              className={inputClass}
              autoComplete="email"
            />
            {errors.contact && <p id="q-contact-err" className="mt-1 text-xs text-red-600">{errors.contact}</p>}
          </div>

          <div>
            <label htmlFor="q-product" className="text-sm font-medium text-[#071C35]">Product interested in</label>
            <input
              id="q-product"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className={inputClass}
              placeholder="e.g. Basin Mixer Faucet"
            />
          </div>

          <div>
            <label htmlFor="q-message" className="text-sm font-medium text-[#071C35]">Message</label>
            <textarea
              id="q-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputClass}
              placeholder="Quantity, size, finish, or any question"
            />
          </div>

          <button type="submit" className="btn-gold w-full">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Send Enquiry on WhatsApp
          </button>

          <div role="status" aria-live="polite">
            {status === "opened" && (
              <p className="rounded-lg bg-[#F8F6F1] p-3 text-xs text-[#27364A]">
                WhatsApp opened with your enquiry. Please press Send there to complete it. Nothing is sent until you do.
              </p>
            )}
            {status === "no-number" && (
              <p className="rounded-lg bg-red-50 p-3 text-xs text-red-700">
                The business WhatsApp number has not been set yet, so the enquiry cannot be sent. (Site owner: add
                the number in data/site.ts.)
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}