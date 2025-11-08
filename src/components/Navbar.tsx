import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Bell, Home, Menu as MenuIcon, UtensilsCrossed } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = 3; // Mock cart count

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/menu", label: "Menu", icon: UtensilsCrossed },
    { path: "/offers", label: "Offers", icon: Bell },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">FoodiePalace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link to="/notifications">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/student-portal">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <User className="w-4 h-4 mr-2" />
                Student Login
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/student-portal"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-md text-muted-foreground hover:text-primary transition-colors"
            >
              <User className="w-5 h-5" />
              Student Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
