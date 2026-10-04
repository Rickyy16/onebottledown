import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      // value: '+91 ',
      // href: 'tel:+91 ',
      value: "+91 7229999797",
      href: "tel:+91 7229999797",
      action: "Call Now",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat with us",
      // href: 'https://wa.me/?text=Hi!%20I\'d%20like%20to%20enquire%20about%20your%20liquor%20delivery%20services.',
      href: "https://wa.me/7229999797?text=Hi!%20I'd%20like%20to%20enquire%20about%20your%20liquor%20delivery%20services.",
      action: "Open WhatsApp",
    },
    // {
    //   icon: <Mail className="w-6 h-6" />,
    //   title: 'Email',
    //   value: 'info@luxspirits.com',
    //   href: 'mailto:info@luxspirits.com',
    //   action: 'Send Email'
    // }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary uppercase tracking-widest text-sm">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              Contact <span className="gold-gradient-text">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to place an order? Get in touch with
              OneBottleDown for fast and reliable liquor delivery in Jaipur.
              Call or WhatsApp us, and our team will assist you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24 bg-charcoal-dark">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.title === "WhatsApp" ? "_blank" : undefined}
                rel={
                  item.title === "WhatsApp" ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 text-center group hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.value}</p>
                <span className="text-primary text-sm font-medium group-hover:underline">
                  {item.action} →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    day: "Monday - Sunday",
                    hours:
                      "Available 24 hours a day, 7 days a week for liquor delivery enquiries in Jaipur.",
                  },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border/30 last:border-0"
                  >
                    <span className="text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Delivery Area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Liquor Delivery Areas in Jaipur
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We offer fast and reliable liquor delivery across Jaipur,
                  Rajasthan. Our local delivery network ensures timely service
                  in the following areas:
                </p>
                <ul className="space-y-2">
                  {[
                    "Liquor Delivery in Central Jaipur",
                    "Liquor Delivery in West Jaipur",
                    "Liquor Delivery in South Jaipur",
                    "Liquor Delivery in East Jaipur",
                    "Liquor Delivery in North Jaipur",
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Not sure if your location is covered? Contact us to confirm
                  liquor delivery availability in your area.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal-dark">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to <span className="gold-gradient-text">Order?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              The fastest way to place an enquiry is by phone or WhatsApp. Our
              team is ready to help you with premium whisky, wine, beer, and
              spirits delivery in Jaipur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                {/* <a href="tel:+91 " className="flex items-center gap-2"> */}
                <a
                  href="tel:+91 7229999797"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a
                  // href="https://wa.me/?text=Hi!%20I'd%20like%20to%20enquire%20about%20your%20liquor%20delivery%20services."
                  href="https://wa.me/7229999797?text=Hi!%20I'd%20like%20to%20enquire%20about%20your%20liquor%20delivery%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              We do not sell alcohol online. Contact us for enquiries only. Must
              be 21+.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
