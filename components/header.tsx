"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { useI18n, type Lang } from "@/lib/i18n"

const langLabels: Record<Lang, string> = {
  en: "EN",
  ro: "RO",
  ru: "RU",
}

const langFull: Record<Lang, string> = {
  en: "English",
  ro: "Romana",
  ru: "Русский",
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useI18n()

  const navLinks = [
    { label: t("navAbout"), href: "#about" },
    { label: t("navPortfolio"), href: "#portfolio" },
    { label: t("navServices"), href: "#services" },
    { label: t("navTestimonials"), href: "#testimonials" },
    { label: t("navContact"), href: "#contact" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target.closest("[data-lang-switcher]")) {
        setLangOpen(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo cu imagine */}
        <a
          href="#"
          className="flex items-center gap-2 font-serif text-xl font-bold tracking-wide text-primary"
        >
          <img 
            src="/logo.png" 
            alt="ViridisCodex Logo" 
            className="h-6 w-auto"
          />
          VIRIDISCODEX
        </a>

        {/* Desktop / tablet: nav links + language switcher, all on the same line as logo */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-5 lg:gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-xs font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-primary lg:text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="h-4 w-px bg-border" aria-hidden="true" />

          {/* Language switcher */}
          <div className="relative" data-lang-switcher>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
              aria-label="Change language"
            >
              <Globe size={14} />
              {langLabels[lang]}
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                {(Object.keys(langLabels) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l)
                      setLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-xs font-medium transition-colors duration-150 ${
                      l === lang
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="w-5 text-center font-semibold">{langLabels[l]}</span>
                    <span>{langFull[l]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile: hamburger only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile language switcher */}
          <div className="mt-6 border-t border-border pt-4">
            <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Globe size={13} />
              {lang === "ru" ? "Язык" : lang === "ro" ? "Limba" : "Language"}
            </p>
            <div className="flex gap-2">
              {(Object.keys(langLabels) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l)
                    setMobileOpen(false)
                  }}
                  className={`flex-1 rounded-lg border px-3 py-2 text-center text-xs font-semibold transition-colors duration-150 ${
                    l === lang
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  <span className="block">{langLabels[l]}</span>
                  <span className="mt-0.5 block text-[10px] font-normal opacity-70">
                    {langFull[l]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}