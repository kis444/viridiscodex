"use client"

import { Code, Palette, Globe, Zap, User, Star } from "lucide-react"
import { useI18n, type TranslationKey } from "@/lib/i18n"

const skillIcons = [Code, Globe, Palette, Zap, User, Star] as const

const skillKeys: { title: TranslationKey; desc: TranslationKey }[] = [
  { title: "skillFrontendTitle", desc: "skillFrontendDesc" },
  { title: "skillBackendTitle", desc: "skillBackendDesc" },
  { title: "skillDesignTitle", desc: "skillDesignDesc" },
  { title: "skillDeliveryTitle", desc: "skillDeliveryDesc" },
  { title: "skillApproachTitle", desc: "skillApproachDesc" },
  { title: "skillUniqueTitle", desc: "skillUniqueDesc" },
]

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            {t("aboutLabel")}
          </p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {t("aboutTitle")}
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {t("aboutDescription")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillKeys.map((skill, i) => {
            const Icon = skillIcons[i]
            return (
              <div
                key={skill.title}
                className="group rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:border-accent hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {t(skill.title)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(skill.desc)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
