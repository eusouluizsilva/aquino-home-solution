import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/constants";

const SERVICE_GALLERY: Record<string, string[]> = {
  "kitchen-bath-remodel": [],
  stairs: [],
  decks: [],
  painting: [],
  "vinyl-flooring": [],
  tile: [],
  plaster: [],
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service) return {};
  return {
    title: `${service.title} Gallery | Aquino Home Solutions`,
    description: service.description,
  };
}

export default async function ServiceGalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service) notFound();

  const photos = SERVICE_GALLERY[id] ?? [];

  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="mb-4 inline-block text-sm font-medium text-[#0a2a6e] hover:underline">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-black uppercase tracking-tight text-[#0a2a6e] sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-gray-600">{service.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0a2a6e] px-6 py-3 text-sm font-bold text-white shadow transition-all hover:brightness-110"
            >
              Get Free Estimate
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#e23635] px-6 py-3 text-sm font-bold text-white shadow transition-all hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>

        {/* Gallery */}
        {photos.length > 0 ? (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {photos.map((src, i) => (
              <div key={src} className="mb-4 overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={src}
                  alt={`${service.title} photo ${i + 1}`}
                  width={600}
                  height={500}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 py-20 text-center text-gray-400">
            Gallery coming soon.
          </div>
        )}
      </div>
    </main>
  );
}
