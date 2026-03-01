"use client"

import { Check, Shield, Clock, Sparkles } from "lucide-react"
import { useI18n, type TranslationKey } from "@/lib/i18n"

type ServiceConfig = {
  titleKey: TranslationKey
  descKey: TranslationKey
  featureKeys: TranslationKey[]
  price?: string
  highlighted: boolean
}

const servicesData: ServiceConfig[] = [
  {
    titleKey: "serviceCustomTitle",
    descKey: "serviceCustomDesc",
    featureKeys: ["serviceCustomF1", "serviceCustomF2", "serviceCustomF3", "serviceCustomF4"],
    highlighted: true,
  },
  {
    titleKey: "serviceMaintenanceTitle",
    descKey: "serviceMaintenanceDesc",
    featureKeys: [
      "serviceMaintenanceF1",
      "serviceMaintenanceF2",
      "serviceMaintenanceF3",
      "serviceMaintenanceF4",
    ],
    price: "$50/mo",
    highlighted: false,
  },
]

const guaranteeData: { icon: typeof Clock; key: TranslationKey }[] = [
  { icon: Clock, key: "guaranteeFast" },
  { icon: Sparkles, key: "guaranteeUnique" },
  { icon: Shield, key: "guaranteeFree" },
]

export function Services() {
  const { t } = useI18n()

  return (
    <section id="services" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            {t("servicesLabel")}
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {t("servicesTitle")}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            {t("servicesSubtitle")}
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {servicesData.map((service) => (
            <div
              key={service.titleKey}
              className={`rounded-lg border p-8 transition-all duration-300 hover:shadow-md ${
                service.highlighted
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background"
              }`}
            >
              <h3 className="mb-1 font-serif text-xl font-bold text-foreground">
                {t(service.titleKey)}
              </h3>
              {service.price && (
                <p className="mb-3 text-2xl font-bold text-primary">
                  {service.price}
                </p>
              )}
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {t(service.descKey)}
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {service.featureKeys.map((fk) => (
                  <li key={fk} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={16} className="shrink-0 text-primary" />
                    {t(fk)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 rounded-lg border border-border bg-background p-8 sm:flex-row sm:justify-center sm:gap-12">
          {guaranteeData.map((item) => (
            <div key={item.key} className="flex items-center gap-3">
              <item.icon size={20} className="shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {t(item.key)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
