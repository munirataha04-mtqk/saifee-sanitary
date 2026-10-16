import { ArrowRight } from "lucide-react";
import { images } from "@/data/site";
import SmartImage from "./SmartImage";

export default function PromoBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#06172B] text-white">
      <div className="absolute inset-0 -z-20">
        <SmartImage
          src={images.promo}
          alt="Modern bathroom with freestanding bathtub and floor-to-ceiling windows"
          className="h-full w-full object-cover object-[70%_center]"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[#071C35]/75 md:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[#071C35] via-[#071C35]/80 to-transparent md:block" />
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <div className="max-w-xl">
          <p className="eyebrow eyebrow-light">Modern Bathroom Solutions</p>
          <h2 className="font-display mt-3 text-[clamp(1.7rem,4.5vw,2.6rem)] font-semibold leading-tight">
            Beautiful Bathrooms <br className="hidden sm:block" />
            Start with the Right Fittings
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/85">
            From luxurious faucets to durable plumbing accessories, we help you create spaces that last.
          </p>
          <a href="#projects" className="btn-outline mt-6">
            View Our Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}