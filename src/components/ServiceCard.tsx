import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

interface ServiceCardProps {
  title: string;
  startingPrice: number;
  features: string[];
}

export function ServiceCard({ title, startingPrice, features }: ServiceCardProps) {
  return (
    <Card className="relative overflow-hidden border-border/50 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/80 backdrop-blur-sm transition-colors shadow-sm dark:shadow-lg dark:shadow-neutral-900/50">
      <CardHeader className="pb-8 pt-6">
        <h3 className="font-light text-2xl">{title}</h3>
        <div className="text-muted-foreground">
          <span className="text-2xl font-light text-foreground">${startingPrice}</span>
          <span className="ml-1 text-sm">starting price</span>
        </div>
      </CardHeader>
      <CardContent className="pb-8">
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary/70" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
