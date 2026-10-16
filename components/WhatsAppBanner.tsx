import { ArrowRight, MessageCircle } from "lucide-react";
import { images, whatsappLink } from "@/data/site";
import SmartImage from "./SmartImage";

export default function WhatsAppBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#06172B] text-white">
      <div className="absolute inset-0 -z-20">
        <SmartImage src={images.whatsapp} alt="Dark luxury bathroom background" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[#06172B]/85" />
      <div className="container-x flex flex-col items-start gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
            <MessageCircle className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-[clamp(1.2rem,3.5vw,1.6rem)] font-semibold leading-snug">
              Need a Quote or Have a Question?
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Chat with us on WhatsApp for instant assistance and best prices.
            </p>
          </div>
        </div>
        <a
          href={whatsappLink("Hello Saifee Sanitary, I would like to get a quote.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold shrink-0"
        >
          Chat on WhatsApp <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}