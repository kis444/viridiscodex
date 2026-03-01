"use client"

import { ArrowDown } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative flex min-h-screen items-center bg-background px-6 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="flex flex-1 flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t("heroLabel")}
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            {t("heroTitle")}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            {t("heroDescription")}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#portfolio"
              className="inline-flex items-center rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            >
              {t("heroCTAPortfolio")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              {t("heroCTAContact")}
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative">
            <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-accent shadow-xl md:h-80 md:w-80 lg:h-96 lg:w-96">
              <img
                src="/images/profile.jpg"
                alt={t("heroPhotoAlt")}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-full border-4 border-card bg-primary" aria-hidden="true" />
            <div className="absolute -left-4 -top-4 h-12 w-12 rounded-full border-4 border-card bg-accent" aria-hidden="true" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
