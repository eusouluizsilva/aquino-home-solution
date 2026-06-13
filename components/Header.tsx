"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { SERVICES_CONTENT } from "@/lib/services-content";
import { CITIES } from "@/lib/cities";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/aquino-logo.webp"
            alt="Aquino Home Solutions"
            width={180}
            height={180}
            className="rounded-md"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              aria-haspopup="true"
            >
              Services
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-72 overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-xl">
                <ul className="py-2">
                  {SERVICES_CONTENT.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.id}`}
                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#0a2a6e]/5 hover:text-[#0a2a6e]"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                  <Link
                    href="/contact"
                    className="text-xs font-bold uppercase tracking-wide text-[#e23635] hover:underline"
                  >
                    Get a Free Estimate →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas dropdown */}
          <div className="group/areas relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              aria-haspopup="true"
            >
              Service Areas
              <ChevronDown className="h-4 w-4 transition-transform group-hover/areas:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover/areas:visible group-hover/areas:opacity-100 group-focus-within/areas:visible group-focus-within/areas:opacity-100">
              <div className="w-[34rem] overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-xl">
                <ul className="grid max-h-[60vh] grid-cols-3 gap-x-2 overflow-y-auto p-3">
                  {CITIES.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/service-areas/${c.slug}`}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-[#0a2a6e]/5 hover:text-[#0a2a6e]"
                      >
                        {c.name}, MA
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                  <Link
                    href="/service-areas"
                    className="text-xs font-bold uppercase tracking-wide text-[#e23635] hover:underline"
                  >
                    View All Service Areas →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <Button asChild size="sm">
            <Link href="/contact">Get Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-gray-200/60 bg-white/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Services accordion */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((o) => !o)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col gap-0.5 border-l border-gray-200 pl-3">
                {SERVICES_CONTENT.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#0a2a6e]"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Service Areas accordion */}
            <button
              type="button"
              onClick={() => setMobileAreasOpen((o) => !o)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              aria-expanded={mobileAreasOpen}
            >
              <span>Service Areas</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileAreasOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileAreasOpen && (
              <div className="ml-3 flex max-h-[40vh] flex-col gap-0.5 overflow-y-auto border-l border-gray-200 pl-3">
                <Link
                  href="/service-areas"
                  className="rounded-md px-3 py-2 text-sm font-semibold text-[#e23635] hover:bg-gray-100"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileAreasOpen(false);
                  }}
                >
                  All Service Areas
                </Link>
                {CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}`}
                    className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#0a2a6e]"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileAreasOpen(false);
                    }}
                  >
                    {c.name}, MA
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="mt-2 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
