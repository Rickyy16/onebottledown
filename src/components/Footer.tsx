import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import logoImg from "../assets/logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl">
                <img src={logoImg} alt="Logo" className="w-[80px] rounded" />
              </span>
              <span className="font-display text-2xl font-bold gold-gradient-text">
                One Bottle Down
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium liquor delivery in Jaipur, offering fast and discreet service. Enjoy quality whisky, wine, beer, and spirits delivered safely to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  // href="tel:+91 6377663382"
                  href="tel:+91 "
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  {/* +91 6377663382 */}
                </a>
              </li>
              <li>
                <a
                  // href="https://wa.me/6377663382"
                  href=''
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Serving Jaipur & surrounding areas</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary mt-1" />
                <span>Open 24/7 for liquor delivery enquiries</span>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Legal Notice
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We do not sell alcohol online. This website is for informational purposes only. For liquor delivery enquiries in Jaipur, please contact us directly.
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              Must be 21 years or older to order. Please drink responsibly.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} OneBottleDown. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Trusted premium liquor delivery service in Jaipur.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
