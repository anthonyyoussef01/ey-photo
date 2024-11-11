import { Link } from 'react-router-dom';

const navItems = [
  { label: "ABOUT", path: "/#about" },
  { label: "GALLERIES", path: "/#galleries" },
  { label: "SERVICES", path: "/services" },
  { label: "CONTACT", path: "/#contact" }
];

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex-1">
          <ul className="flex gap-8">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.path}
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <Link to="/" className="flex-1 text-center text-2xl font-light">EY</Link>
        
        <div className="flex-1 flex justify-end">
          <ul className="flex gap-8">
            {navItems.slice(2).map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.path}
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}