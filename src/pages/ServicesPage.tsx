import { motion } from 'framer-motion';
import { CalendlyButton } from '@/components/CalendlyButton';
import { services } from '@/lib/data';

export function ServicesPage() {
  return (
    <div className="pt-32 px-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light mb-12 text-center"
        >
          Services & Pricing
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16 bg-neutral-50">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-light mb-4">{service.title}</h3>
              <p className="text-3xl font-light mb-6">Starting at ${service.startingPrice}</p>
              <ul className="space-y-3 text-neutral-600 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <CalendlyButton />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-neutral-600 mb-4">
            Every event is unique. Contact us for a custom quote tailored to your needs.
          </p>
          <CalendlyButton />
        </motion.div>
      </div>
    </div>
  );
}