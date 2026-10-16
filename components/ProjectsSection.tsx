
import { MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#F8F6F1] py-14 sm:py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Projects"
          title="Completed Bathroom Projects"
          linkLabel="View More Projects"
          href="#contact"
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.id} className="group">
              <article className="h-full rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#071C35]/10">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#071C35]">
                  <SmartImage
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="px-1 pb-2">
                  <h3 className="mt-3 text-sm font-semibold text-[#071C35] transition-colors duration-300 group-hover:text-[#B07A14]">
                    {p.title}
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 text-xs text-[#6F7A88]">
                    <MapPin
                      className="h-3.5 w-3.5 text-[#B07A14] transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    {p.location}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
