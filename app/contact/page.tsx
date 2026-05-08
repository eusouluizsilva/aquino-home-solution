import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAForm from "@/components/CTAForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate — Lowell, MA",
  description:
    "Contact Aquino Home Solutions for a free general contracting estimate — remodels, decks, painting, flooring, tile, plaster, and stairs. Call (603) 408-4073 or fill out our quick form.",
};

const contactCards = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Call or Text",
    content: (
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="text-lg font-semibold text-primary hover:underline"
      >
        {BUSINESS.phone}
      </a>
    ),
    sub: BUSINESS.hours.weekdays,
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "WhatsApp",
    content: (
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-green-600 hover:underline"
      >
        Message Us
      </a>
    ),
    sub: "Fastest response",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: (
      <a
        href={`mailto:${BUSINESS.email}`}
        className="text-sm font-medium text-primary hover:underline break-all"
      >
        {BUSINESS.email}
      </a>
    ),
    sub: "We reply within 1 business hour",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    content: <span className="font-medium">{BUSINESS.address}</span>,
    sub: "Serving Greater Lowell, MA",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Business Hours",
    content: (
      <div className="space-y-0.5 text-sm font-medium">
        <div>{BUSINESS.hours.weekdays}</div>
        <div>{BUSINESS.hours.saturday}</div>
        <div>{BUSINESS.hours.sunday}</div>
      </div>
    ),
    sub: "",
  },
];

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Contact Aquino Home Solutions
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Ready to get started? Fill out the form or reach out directly — we&apos;ll
            respond within 1 business hour.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* Contact info cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactCards.map((card) => (
              <Card key={card.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base text-muted-foreground font-medium">
                    <span className="text-primary">{card.icon}</span>
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {card.content}
                  {card.sub && (
                    <p className="mt-1 text-xs text-muted-foreground">{card.sub}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form */}
          <CTAForm />
        </div>
      </div>
    </div>
  );
}
