import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { cn } from "@/lib/utils";
import { Dropdown, TriggerWrapper, Trigger, Tabs, Tab } from '@/components/ui/dropdown-nav';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  className?: string;
}

const navItems = [
  { label: "ABOUT", path: "about" },
  { label: "GALLERIES", path: "galleries" },
  { label: "CONTACT", path: "contact" }
];

export function Navigation({ className }: NavigationProps) {
  const [scrollTo, setScrollTo] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const scrollToTop = () => {
    handleScrollLinkClick('hero');
  };

  useEffect(() => {
    if (scrollTo && location.pathname === '/') {
      scroller.scrollTo(scrollTo, {
        smooth: true,
        duration: 500,
      });
      setScrollTo(null);
    }
  }, [location, scrollTo]);

  const handleScrollLinkClick = (path: string) => {
    if (location.pathname !== '/') {
      setScrollTo(path);
      navigate('/');
    } else {
      scroller.scrollTo(path, {
        smooth: true,
        duration: 500,
      });
    }
  };

  return (
      <nav className={cn(
          "fixed top-0 w-full z-50 backdrop-blur-sm border-b",
          "bg-white/80 dark:bg-neutral-900/80",
          "border-neutral-200 dark:border-neutral-800",
          className
      )}>
        {/* Desktop Navigation */}
        <div className="hidden md:flex max-w-screen-2xl mx-auto px-6 py-4 items-center justify-between">
          <div className="flex-1">
            <Dropdown>
              <TriggerWrapper>
                <Trigger>EXPLORE</Trigger>
                <Trigger>SERVICES</Trigger>
              </TriggerWrapper>
              <Tabs>
                <Tab>
                  <div className="grid gap-4 p-4">
                    {navItems.slice(0, 2).map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleScrollLinkClick(item.path)}
                            className="text-start text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-400"
                        >
                          {item.label}
                        </button>
                    ))}
                  </div>
                </Tab>
                <Tab>
                  <div className="p-4">
                    <RouterLink
                        to="/services"
                        className="block text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-400"
                    >
                      VIEW PACKAGES
                    </RouterLink>
                  </div>
                </Tab>
              </Tabs>
            </Dropdown>
          </div>

          <RouterLink
              to="/"
              className="text-center text-2xl font-light text-foreground"
              onClick={scrollToTop}
          >
            EY
          </RouterLink>

          <div className="flex-1 flex justify-end items-center gap-6">
            <div className="flex items-center gap-8">
              {navItems.slice(2).map((item) => (
                  <button
                      key={item.label}
                      onClick={() => handleScrollLinkClick(item.path)}
                      className="text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-400"
                  >
                    {item.label}
                  </button>
              ))}
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-400"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-center py-4">
            <RouterLink
                to="/"
                className="text-2xl font-light text-foreground"
                onClick={scrollToTop}
            >
              EY
            </RouterLink>
          </div>
          <div className="flex items-center justify-around border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm px-2 py-3">
            {navItems.map((item) => (
                <button
                    key={item.label}
                    onClick={() => handleScrollLinkClick(item.path)}
                    className="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {item.label}
                </button>
            ))}
            <RouterLink
                to="/services"
                className="text-xs font-medium text-neutral-800 dark:text-neutral-200"
            >
              SERVICES
            </RouterLink>
          </div>
        </div>
      </nav>
  );
}