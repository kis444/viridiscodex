"use client"

import { Send } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="flex-1">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              {t("contactLabel")}
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              {t("contactTitle")}
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
              {t("contactDescription")}
            </p>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Send size={16} />
                </div>
                <a 
                  href="mailto:viridiscodex@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 underline-offset-2 hover:underline"
                >
                  {t("contactEmail")}
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <form
              action="https://formspree.io/f/xlgwkpar"
              method="POST"
              className="flex flex-col gap-5 rounded-lg border border-border bg-background p-8"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  {t("formName")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t("formNamePlaceholder")}
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  {t("formEmail")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t("formEmailPlaceholder")}
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  {t("formMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t("formMessagePlaceholder")}
                  className="resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              >
                {t("formSubmit")}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}