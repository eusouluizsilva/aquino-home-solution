import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { CITIES } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,rgba(9,16,40,0.98)_0%,rgba(18,42,94,0.96)_45%,rgba(104,12,24,0.95)_100%)] text-slate-300">
      <div className="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/aquino-logo.webp"
                alt="Aquino Home Solutions"
                width={128}
                height={128}
                className="rounded-md"
              />
            </div>
            <p className="text-sm leading-relaxed">
              {BUSINESS.description}
            </p>
            <div className="mt-4 flex gap-3">
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                Licensed
              </span>
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                Insured
              </span>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {CITIES.filter((c) => c.tier === "home" || c.tier === "A")
                .slice(0, 9)
                .map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/service-areas/${city.slug}`}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {city.name}, MA
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {BUSINESS.address}
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="space-y-0.5">
                  <div>{BUSINESS.hours.weekdays}</div>
                  <div>{BUSINESS.hours.saturday}</div>
                  <div>{BUSINESS.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-1 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </div>
          <div>
            Website by{" "}
            <a
              href="https://silvagrowth.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              SilvaGrowth
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
