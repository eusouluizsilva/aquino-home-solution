import { Star } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

function ReviewCard({
  name,
  text,
  rating,
}: {
  name: string;
  text: string;
  rating: number;
}) {
  return (
    <div className="shrink-0 w-[350px] rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
        <svg
          className="ml-auto h-5 w-5 text-muted-foreground/60"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}

export default function GoogleReviews() {
  const row1 = GOOGLE_REVIEWS.slice(0, 5);
  const row2 = GOOGLE_REVIEWS.slice(5, 10);

  return (
    <section className="border-t py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Google Reviews
          </h2>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
            />
          ))}
          <span className="ml-2 text-sm font-medium text-muted-foreground">
            5.0 on Google
          </span>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-container mb-4">
        <div className="animate-marquee-left flex gap-4 w-max">
          {[...row1, ...row1].map((review, i) => (
            <ReviewCard key={`r1-${i}`} {...review} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-container">
        <div className="animate-marquee-right flex gap-4 w-max">
          {[...row2, ...row2].map((review, i) => (
            <ReviewCard key={`r2-${i}`} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
