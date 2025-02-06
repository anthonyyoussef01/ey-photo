import React, { useState, createContext, useContext, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const DirectionContext = createContext<{
    direction: 'rtl' | 'ltr' | null
    setAnimationDirection: (tab: number | null) => void
} | null>(null)

const CurrentTabContext = createContext<{
    currentTab: number | null
} | null>(null)

export const Dropdown: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTab, setCurrentTab] = useState<null | number>(null)
    const [direction, setDirection] = useState<'rtl' | 'ltr' | null>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const closeDropdown = () => {
        setCurrentTab(null)
        setDirection(null)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <DirectionContext.Provider value={{ direction, setAnimationDirection: setCurrentTab }}>
            <CurrentTabContext.Provider value={{ currentTab }}>
                <div 
                    ref={dropdownRef}
                    className='relative flex h-fit gap-2 z-30'
                    onMouseLeave={closeDropdown}
                >
                    {children}
                </div>
            </CurrentTabContext.Provider>
        </DirectionContext.Provider>
    )
}

export const TriggerWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { currentTab } = useContext(CurrentTabContext)!
    const { setAnimationDirection } = useContext(DirectionContext)!

    return (
        <div className="flex gap-2">
            {React.Children.map(children, (e, i) => (
                <button
                    onMouseEnter={() => setAnimationDirection(i + 1)}
                    onClick={() => setAnimationDirection(currentTab === i + 1 ? null : i + 1)}
                    className={cn(
                        "flex h-10 items-center gap-0.5 rounded-md px-2 md:px-4 py-2",
                        "text-xs md:text-sm lg:text-base font-medium",
                        "text-neutral-800 dark:text-neutral-200",
                        "transition-colors hover:text-neutral-500 dark:hover:text-neutral-400",
                        currentTab === i + 1 && "bg-neutral-100 dark:bg-neutral-800 [&>svg]:rotate-180"
                    )}
                >
                    {e}
                </button>
            ))}
        </div>
    )
}

export const Trigger: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className
}) => {
    return (
        <>
            <span className={cn('text-neutral-800 dark:text-neutral-200', className)}>{children}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200"
                aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
            </svg>
        </>
    )
}

export const Tabs: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className
}) => {
    const { currentTab } = useContext(CurrentTabContext)!
    const { direction } = useContext(DirectionContext)!
    
    if (!currentTab) return null;

    return (
        <div 
            className={cn(
                "absolute left-0 top-full pt-2",
                currentTab === null && "pointer-events-none opacity-0"
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-auto rounded-lg"
            >
                <motion.div 
                    className={cn(
                        'rounded-lg border bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg overflow-hidden',
                        'border-neutral-200 dark:border-neutral-800',
                        className
                    )}
                    layout
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {React.Children.map(children, (e, i) => (
                            currentTab === i + 1 && (
                                <motion.div
                                    key={i}
                                    initial={{
                                        opacity: 0,
                                        x: direction === 'ltr' ? -20 : 20,
                                    }}
                                    animate={{ 
                                        opacity: 1, 
                                        x: 0,
                                    }}
                                    exit={{ 
                                        opacity: 0,
                                        x: direction === 'ltr' ? 20 : -20,
                                    }}
                                    transition={{ 
                                        duration: 0.15,
                                        ease: "easeInOut"
                                    }}
                                    layout
                                >
                                    {e}
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </div>
    )
}

export const Tab: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className
}) => {
    return (
        <motion.div 
            layout
            className={cn(
                'w-[350px] md:w-[450px] lg:w-[500px]',
                className
            )}
        >
            {children}
        </motion.div>
    )
}
