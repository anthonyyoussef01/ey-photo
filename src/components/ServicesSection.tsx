import { services } from "@/lib/data"
import { ServiceCard } from "./ServiceCard"

export function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-background/50 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-light mb-4">Investment</h2>
          <p className="text-muted-foreground">
            Choose the perfect package for your needs. All packages can be customized to meet your specific requirements.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
