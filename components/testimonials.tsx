"use client"

import { Quote, Star } from "lucide-react"
import { useI18n, type TranslationKey } from "@/lib/i18n"

const testimonialKeys: {
  textKey: TranslationKey
  nameKey: TranslationKey
  roleKey: TranslationKey
}[] = [
  {
    textKey: "testimonial1Text",
    nameKey: "testimonial1Name",
    roleKey: "testimonial1Role",
  },
  {
    textKey: "testimonial2Text",
    nameKey: "testimonial2Name",
    roleKey: "testimonial2Role",
  },
  {
    textKey: "testimonial3Text",
    nameKey: "testimonial3Name",
    roleKey: "testimonial3Role",
  },
]

export function Testimonials() {
  const { t } = useI18n()

  return (
    <section id="testimonials" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            {t("testimonialsLabel")}
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {t("testimonialsTitle")}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonialKeys.map((item) => (
            <div
              key={item.nameKey}
              className="group relative flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-accent hover:shadow-md"
            >
              <Quote
                size={32}
                className="mb-4 text-primary/20"
                aria-hidden="true"
              />

              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-primary/80 text-primary/80"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mb-8 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(item.textKey)}
              </blockquote>

              <div className="border-t border-border pt-5">
                <p className="font-serif text-base font-semibold text-foreground">
                  {t(item.nameKey)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t(item.roleKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
