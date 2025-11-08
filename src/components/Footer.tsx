import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">FoodiePalace</h3>
            <p className="text-sm text-muted-foreground">
              Delicious meals delivered fresh to your doorstep. Experience culinary excellence with every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/student-portal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                hello@foodiepalace.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                123 Food Street, NY
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 FoodiePalace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
