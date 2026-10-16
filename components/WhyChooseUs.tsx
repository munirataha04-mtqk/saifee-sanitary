import { Award, Headset, Heart, Tag, Truck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  { title: "High Quality Products", text: "Only genuine & durable brands.", Icon: Award },
  { title: "On-Time Delivery", text: "Fast & reliable delivery in Karachi.", Icon: Truck },
  { title: "Expert Support", text: "Our team is always here to help.", Icon: Headset },
  { title: "Competitive Prices", text: "Best value for your money.", Icon: Tag },
  { title: "Long Term Relationship", text: "Your satisfaction is our priority.", Icon: Heart },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#071C35] py-14 text-white sm:py-16">
      <div className="container-x">
        <SectionHeading eyebrow="Why Choose Us" title="Your Trusted Sanitary Partner" dark />
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-5 lg:gap-0">
          {features.map(({ title, text, Icon }, i) => (
            <li
              key={title}
              className={`flex flex-col items-start gap-3 lg:px-5 ${
                i > 0 ? "lg:border-l lg:border-white/15" : "lg:pl-0"
              } ${i === features.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#E9AD43] text-[#E9AD43]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/70">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}