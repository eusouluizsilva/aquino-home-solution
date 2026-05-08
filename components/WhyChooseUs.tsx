"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Shield, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Fast Response",
    description:
      "We answer calls fast and offer same-day appointments. No waiting weeks for service.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Licensed Local Experts",
    description:
      "Fully licensed and insured in Massachusetts. We know local codes and requirements.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Fair, Upfront Pricing",
    description:
      "No hidden fees or surprise charges. We give you a clear estimate before any work begins.",
  },
];

export default function WhyChooseUs() {
  const [visible, setVisible] = useState<boolean[]>(
    new Array(reasons.length).fill(false)
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10 md:py-14" style={{ background: "linear-gradient(135deg, oklch(0.42 0.03 250) 0%, oklch(0.50 0.025 240) 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted Local General Contractor for Your Home
          </h2>
          <p className="mt-3 text-blue-100/80">
            From kitchen and bath remodels to decks, painting, flooring, and
            plaster — we deliver code-compliant work, clean finishes, and honest
            communication from first call to final walkthrough.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reasons.map(({ icon, title, description }, i) => (
            <div
              key={title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="rounded-2xl border border-white/10 p-8 text-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.28 0.03 250) 0%, oklch(0.34 0.025 240) 100%)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                transition: "opacity 1.4s ease, transform 1.4s ease",
                transitionDelay: `${i * 250}ms`,
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(2rem)",
              }}
            >
              <div
                className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10"
                style={{ color: "white" }}
              >
                {icon}
              </div>
              <h3
                className="mb-2 text-xl font-semibold"
                style={{ color: "white" }}
              >
                {title}
              </h3>
              <p className="text-blue-100/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
