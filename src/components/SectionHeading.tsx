import { ScrollReveal } from "@/components/reactbits"

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  description: string
  tip?: string
}

export function SectionHeading({ index, label, title, description, tip }: SectionHeadingProps) {
  return (
    <ScrollReveal className="section-heading mb-12 sm:mb-16">
      <div className="section-heading__meta">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {tip && <span className="section-heading__tip">{tip}</span>}
      </div>
      <p>{description}</p>
    </ScrollReveal>
  )
}
