"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  Loader2,
  AlertCircle,
  Send,
  Upload,
  X,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { leadFormSchema, LeadFormValues } from "@/lib/validation";
import { SERVICES, FILE_CONSTRAINTS } from "@/lib/constants";
import { pushGTMEvent } from "@/lib/gtm";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface CTAFormProps {
  defaultService?: string;
}

export default function CTAForm({ defaultService }: CTAFormProps = {}) {
  return (
    <Suspense fallback={<div className="rounded-xl border bg-card p-6 shadow-sm h-80 animate-pulse" />}>
      <CTAFormInner defaultService={defaultService} />
    </Suspense>
  );
}

function CTAFormInner({ defaultService }: CTAFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState<string>("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
  });

  useEffect(() => {
    const serviceParam = defaultService ?? searchParams.get("service");
    if (serviceParam && SERVICES.some((s) => s.id === serviceParam)) {
      setValue("service", serviceParam, { shouldValidate: true });
    }
  }, [defaultService, searchParams, setValue]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoError("");
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const combined = [...photos, ...files];
    if (combined.length > FILE_CONSTRAINTS.maxFiles) {
      setPhotoError(`Maximum ${FILE_CONSTRAINTS.maxFiles} photos.`);
      return;
    }
    for (const file of files) {
      if (!FILE_CONSTRAINTS.acceptedTypes.includes(file.type)) {
        setPhotoError(`"${file.name}" is not a supported image type.`);
        return;
      }
      if (file.size > FILE_CONSTRAINTS.maxSizeBytes) {
        setPhotoError(`"${file.name}" is over ${FILE_CONSTRAINTS.maxSizeMB}MB.`);
        return;
      }
    }
    setPhotos(combined);
    pushGTMEvent("upload_photo", { count: files.length });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePhoto = (idx: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
  };

  const onSubmit = async (data: LeadFormValues) => {
    setStatus("submitting");
    setServerError("");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("service", data.service);
    if (data.message) formData.append("message", data.message);
    photos.forEach((p) => formData.append("photos", p));

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        pushGTMEvent("submit_quote_form");
        reset();
        setPhotos([]);
        router.push("/thank-you");
        return;
      } else {
        const body = await res.json().catch(() => ({}));
        setServerError(body.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-10 text-center shadow-sm">
        <CheckCircle className="mb-4 h-14 w-14 text-green-500" />
        <h3 className="text-xl font-semibold mb-2">Request Received!</h3>
        <p className="text-muted-foreground mb-6">
          We&apos;ll get back to you within 1 business hour. For urgent needs, call us directly.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border bg-card p-6 shadow-sm space-y-4"
      noValidate
    >
      {/* Trust bar */}
      <div className="-mx-6 -mt-6 mb-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-t-xl border-b bg-[#0a2a6e]/[0.04] px-6 py-3 text-xs font-semibold text-[#0a2a6e]">
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          5.0 on Google
        </span>
        <span className="hidden sm:inline text-muted-foreground/40">·</span>
        <span>Licensed &amp; Insured</span>
        <span className="hidden sm:inline text-muted-foreground/40">·</span>
        <span>15+ Years</span>
        <span className="hidden sm:inline text-muted-foreground/40">·</span>
        <span>Free Estimates</span>
      </div>

      {/* Name */}
      <div className="space-y-1">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          placeholder="John Smith"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(508) 555-1234"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Service */}
      <div className="space-y-1">
        <Label htmlFor="service">Service Needed *</Label>
        <Select
          onValueChange={(val) => setValue("service", val, { shouldValidate: true })}
          value={watch("service")}
        >
          <SelectTrigger id="service" aria-invalid={!!errors.service}>
            <SelectValue placeholder="Select a service…" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-xs text-destructive">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1">
        <Label htmlFor="message">
          Tell us about your project <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Briefly describe what you need — size of room, materials, timeline, etc."
          rows={3}
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Photos */}
      <div className="space-y-1">
        <Label htmlFor="photos">
          Photos <span className="text-muted-foreground font-normal">(optional, up to {FILE_CONSTRAINTS.maxFiles})</span>
        </Label>
        <input
          ref={fileInputRef}
          id="photos"
          type="file"
          accept={FILE_CONSTRAINTS.acceptedExtensions}
          multiple
          onChange={handlePhotoChange}
          className="sr-only"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full items-center justify-center gap-2 rounded-md border border-dashed border-input bg-background px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted/50"
        >
          <Upload className="h-4 w-4" />
          {photos.length === 0
            ? "Add photos of your space"
            : `Add more (${photos.length}/${FILE_CONSTRAINTS.maxFiles})`}
        </button>
        {photoError && (
          <p className="text-xs text-destructive">{photoError}</p>
        )}
        {photos.length > 0 && (
          <ul className="mt-2 space-y-1">
            {photos.map((file, idx) => (
              <li
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between rounded-md border bg-muted/30 px-3 py-1.5 text-xs"
              >
                <span className="truncate pr-2">
                  {file.name}{" "}
                  <span className="text-muted-foreground">
                    ({(file.size / 1024 / 1024).toFixed(1)}MB)
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => removePhoto(idx)}
                  className="text-muted-foreground hover:text-destructive"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Server error */}
      {status === "error" && serverError && (
        <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white shadow-[0_10px_24px_-14px_rgba(80,90,110,0.6)] transition-all hover:brightness-105 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
        style={{ background: "linear-gradient(135deg, oklch(0.52 0.04 250) 0%, oklch(0.62 0.03 240) 100%)" }}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Get Free Estimate
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        We respond within 1 business hour · No spam, ever
      </p>
    </form>
  );
}
