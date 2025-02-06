import { motion } from 'framer-motion';
import { CalendlyButton } from '@/components/CalendlyButton';
import { services } from '@/lib/data';
import { PackageOpen, Camera, Heart, PartyPopper, Plane } from 'lucide-react';

const serviceIcons = {
  'Wedding Photography': Camera,
  'Event Photography': PartyPopper,
  'Aerial Photography': Plane,
  'Engagement Session': Heart,
  'Portrait Session': PackageOpen,
};

export function ServicesPage() {
  return (
    <div className="pt-32 px-6 min-h-screen bg-background">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-light mb-6">Services & Pricing</h1>
          <p className="text-muted-foreground">
            Choose from our carefully crafted packages designed to capture your special moments.
            Each package can be customized to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card text-card-foreground p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                {Icon && <Icon className="w-8 h-8 mb-6 text-muted-foreground" />}
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <div className="text-3xl font-light mb-2">
                  ${service.startingPrice}
                  <span className="text-base text-muted-foreground ml-1">starting</span>
                </div>
                {'features' in service && service.features && (
                  <ul className="space-y-3 mb-8 border-t border-border pt-6 mt-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-muted-foreground">
                        <span className="mr-2 text-emerald-500 dark:text-emerald-400">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <CalendlyButton />
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center bg-card text-card-foreground p-12 rounded-xl shadow-sm border border-border"
        >
          <h3 className="text-2xl font-light mb-4">Need Something Custom?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every event is unique, and we're happy to create a custom package that perfectly matches your vision and requirements.
          </p>
          <CalendlyButton />
        </motion.div>
      </div>
    </div>
  );
}