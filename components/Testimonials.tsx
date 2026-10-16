import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-[#F8F6F1] py-14 sm:py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          linkLabel="View More Reviews"
          href="#contact"
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.id} className="flex">
              <figure className="flex w-full flex-col rounded-xl border border-[#E7E2D6] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#071C35] font-semibold text-white"
                  >
                    {t.initial}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#071C35]">{t.name}</p>
                    <p className="text-xs text-[#B07A14]">{t.location}</p>
                    <p className="mt-1 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#E9AD43] text-[#E9AD43]" aria-hidden="true" />
                      ))}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-[#27364A]">“{t.text}”</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}