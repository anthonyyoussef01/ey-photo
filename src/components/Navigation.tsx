import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const navItems = [
  { label: "ABOUT", path: "about" },
  { label: "GALLERIES", path: "galleries" },
  { label: "SERVICES", path: "/services" },
  { label: "CONTACT", path: "contact" }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTo, setScrollTo] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Add scrollToTop function
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex-1">
          <ul className="hidden md:flex gap-8">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.label}>
                <span
                  onClick={() => handleScrollLinkClick(item.path)}
                  className="text-neutral-600 hover:text-black transition-colors cursor-pointer"
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <RouterLink 
          to="/" 
          className="flex-1 text-center text-2xl font-light"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              scrollToTop();
            }
          }}
        >
          EY
        </RouterLink>

        <div className="flex-1 flex justify-end">
          <ul className="hidden md:flex gap-8">
            {navItems.slice(2).map((item) => (
              <li key={item.label}>
                {item.path.startsWith('/') ? (
                  <RouterLink
                    to={item.path}
                    className="text-neutral-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </RouterLink>
                ) : (
                  <span
                    onClick={() => handleScrollLinkClick(item.path)}
                    className="text-neutral-600 hover:text-black transition-colors cursor-pointer"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="md:hidden text-neutral-600 hover:text-black transition-colors"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      <div className={`fixed top-0 right-0 w-64 bg-white/80 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-end p-6">
          <button
            className="text-neutral-600 hover:text-black transition-colors"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
        <ul className="flex flex-col gap-8 p-6">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.path.startsWith('/') ? (
                <RouterLink
                  to={item.path}
                  className="text-neutral-600 hover:text-black transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </RouterLink>
              ) : (
                <span
                  onClick={() => {
                    handleScrollLinkClick(item.path);
                    toggleMenu();
                  }}
                  className="text-neutral-600 hover:text-black transition-colors cursor-pointer"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}