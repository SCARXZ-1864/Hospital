import { Award, Clock, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

const ICONS = [ShieldCheck, Clock, Award];

export function TrustStrip() {
  return (
    <section className="border-b border-ink-900/5 bg-cream-100">
      <Reveal stagger className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
        {site.trustBullets.map((bullet, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal.Item key={bullet.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-800 text-cream-50">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-serif text-lg text-ink-900">{bullet.title}</h3>
                <p className="mt-1 text-sm text-ink-500">{bullet.description}</p>
              </div>
            </Reveal.Item>
          );
        })}
      </Reveal>
    </section>
  );
}
