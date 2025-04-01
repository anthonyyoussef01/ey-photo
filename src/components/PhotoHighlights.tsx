import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { highlights } from "@/lib/data";

export function PhotoHighlights() {
    return (
        <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="max-w-screen-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {highlights.map((photo, index) => (
                        <motion.div
                            key={photo.url}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.23, 1, 0.32, 1]
                            }}
                            className={cn(
                                "relative overflow-hidden rounded-2xl shadow-xl",
                                photo.size === 'large' && 'col-span-2 row-span-3',
                                photo.size === 'medium' && 'col-span-2',
                                "transition-transform duration-500 hover:scale-[1.02]"
                            )}
                        >
                            {photo.size === 'large' ? (
                                <div className="h-full w-full">
                                    <img
                                        src={photo.url}
                                        alt="Highlight photo"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            ) : photo.size === 'medium' ? (
                                <AspectRatio ratio={16/9}>
                                    <img
                                        src={photo.url}
                                        alt="Highlight photo"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </AspectRatio>
                            ) : (
                                <AspectRatio ratio={1}>
                                    <img
                                        src={photo.url}
                                        alt="Highlight photo"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </AspectRatio>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}