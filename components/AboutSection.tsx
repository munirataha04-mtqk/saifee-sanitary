import { Award, Boxes, Headset, Users } from "lucide-react";
import { images } from "@/data/site";
import SmartImage from "./SmartImage";

const badges = [
  { label: "Premium Quality", Icon: Award },
  { label: "Wide Range of Products", Icon: Boxes },
  { label: "Expert Support", Icon: Headset },
  { label: "Trusted by Professionals", Icon: Users },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="container-x flex flex-col justify-center py-14 sm:py-16 lg:ml-auto lg:max-w-[40rem] lg:pr-12">
          <p className="eyebrow">All-in-One Solutions</p>
          <h2 className="font-display mt-3 text-[clamp(1.8rem,4.5vw,2.6rem)] font-semibold leading-tight text-[#071C35]">
            Everything You Need <br className="hidden sm:block" />
            for Your Bathroom
          </h2>
          <p className="mt-5 leading-relaxed text-[#27364A]">
            At Saifee Sanitary, we offer a complete range of sanitary ware, bathroom fittings, faucets, showers,
            basins, toilets, ceramics, plumbing connectors and accessories. Quality products. Trusted brands.
            Competitive prices.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {badges.map(({ label, Icon }) => (
              <li key={label} className="flex flex-col items-center gap-2 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FBF0DA] text-[#B07A14] ring-1 ring-[#E9AD43]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium leading-snug text-[#071C35]">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[28rem]">
          <SmartImage
            src={images.collection}
            alt="Toilet, countertop basin, chrome faucet and plumbing fittings on white marble"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}