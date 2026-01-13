import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { ProductMegaMenu } from "@/components/navbar/ProductMegaMenu";
import { ProductMegaMenu } from "@/navbar/ProductMegaMenu";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" }, // handled specially
  { name: "Industries", href: "/industries" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
  src={logo}
  alt="SumTech Engineering Logo"
  className="w-10 h-10 object-contain"
/>

            <div className="block">
              <span className="font-display font-bold text-xl text-foreground">
                SumTech Engineering
              </span>
              <span className="block text-xs text-muted-foreground -mt-1">
                Industrial Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 relative">
            {navigation.map((item) =>
              item.name === "Products" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setProductMenuOpen(true)}
                  onMouseLeave={() => setProductMenuOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={`nav-link ${
                      productMenuOpen || location.pathname === item.href ? "text-accent" : ""
                    }`}
                  >
                    Product & Services
                  </Link>

                  {productMenuOpen && <ProductMegaMenu />}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${
                    location.pathname === item.href ? "text-accent" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+91 8263990352"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              8263990352
            </a>
            <Button asChild className="btn-accent">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name === "Products"
                    ? "Product & Services"
                    : item.name}
                    
                </Link>
              ))}

              <div className="mt-4 px-4">
                <Button asChild className="w-full btn-accent">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
