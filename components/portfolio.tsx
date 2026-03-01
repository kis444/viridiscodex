"use client"

import { ExternalLink } from "lucide-react"
import { useI18n, type TranslationKey } from "@/lib/i18n"

const projectKeys: {
  title: TranslationKey
  desc: TranslationKey
  tags: string[]
  image: string
  link: string
}[] = [
  {
    title: "project1Title",
    desc: "project1Desc",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/project-1.jpg",
    link: "https://artpin-r6lf.vercel.app/",
    
  },
  {
    title: "project2Title",
    desc: "project2Desc",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/images/project-2.jpg",
    link: "#",
  },
  {
    title: "project3Title",
    desc: "project3Desc",
    tags: ["Next.js", "D3.js", "REST API"],
    image: "/images/project-3.jpg",
    link: "#",
  },
  {
    title: "project4Title",
    desc: "project4Desc",
    tags: ["React", "Express", "MongoDB"],
    image: "/images/project-4.jpg",
    link: "#",
  },
  {
    title: "project5Title",
    desc: "project5Desc",
    tags: ["Next.js", "Stripe", "Supabase"],
    image: "/images/project-5.jpg",
    link: "#",
  },
]

export function Portfolio() {
  const { t } = useI18n()

  return (
    <section id="portfolio" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            {t("portfolioLabel")}
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {t("portfolioTitle")}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            {t("portfolioSubtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projectKeys.map((project, index) => (
            <div
              key={project.title}
              className={`group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden md:aspect-auto md:w-1/2">
                <img
                  src={project.image}
                  alt={`Preview of ${t(project.title)} project`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
                <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                  {t(project.title)}
                </h3>
                <p className="mb-5 leading-relaxed text-muted-foreground">
                  {t(project.desc)}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
               <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
>
  {t("viewProject")} <ExternalLink size={14} />
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
