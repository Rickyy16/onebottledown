import { motion } from 'framer-motion';
import { ArrowDown, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bottles.jpg';
import whiskyGlass from '@/assets/whisky-glass.jpg';

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Whisky"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm uppercase tracking-widest mb-6"
            >
              Liquor Delivery in Jaipur
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-foreground">Your Favorite Drinks,</span>
              <br />
              <span className="gold-gradient-text">Right to Your Door</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Order premium whisky, vodka, rum, wine, and beer online in Jaipur. Enjoy fast local liquor delivery, a premium selection, and discreet service — right to your doorstep.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="gold" size="xl" asChild>
                <a href="tel:+91 " className="flex items-center gap-2">
                {/* <a href="tel:+91 6377663382" className="flex items-center gap-2"> */}
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a
                  href="https://wa.me/?text=Hi!%20I'd%20like%20to%20enquire%20about%20your%20liquor%20delivery%20services."
                  // href="https://wa.me/6377663382?text=Hi!%20I'd%20like%20to%20enquire%20about%20your%20liquor%20delivery%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-charcoal-dark">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
              <span className="gold-gradient-text">Jaipur’s Trusted </span> Premium Liquor Delivery Service
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning-Fast Delivery',
                description: 'Get your favorite spirits delivered quickly anywhere in Jaipur.'
              },
              {
                icon: '✨',
                title: 'Premium Spirits & Wines',
                description: 'Choose from top-quality whiskies, vodkas, wines, beers, and more.'
              },
              {
                icon: '🔒',
                title: 'Private & Protected',
                description: 'Handled professionally with complete privacy and safe, secure packaging.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center group hover:border-primary/50 transition-colors"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm">How It Works</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
              <span className="gold-gradient-text">Easy & Reliable</span> Liquor Delivery in Jaipur
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Browse Our Selection', desc: 'Explore a wide range of premium liquor, including whisky, vodka, rum, wine, and beer available for delivery in Jaipur.' },
              { step: '02', title: 'Call or WhatsApp Us', desc: 'Place your enquiry easily via phone or WhatsApp with your preferred drinks and delivery location.' },
              { step: '03', title: 'Fast Doorstep Delivery', desc: 'Sit back and relax while we deliver your order quickly and discreetly to your doorstep.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="font-display text-6xl md:text-7xl font-bold gold-gradient-text opacity-80 mb-8">
                  {item.step}
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3 -mt-8 relative z-10">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas Section */}
      <section className="py-20 md:py-32 bg-charcoal-dark">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary uppercase tracking-widest text-sm">Delivery Coverage</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                Liquor Delivery Across <span className="gold-gradient-text">Jaipur</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We provide fast and reliable liquor delivery across Jaipur, Rajasthan. Whether you’re in the city center or nearby neighborhoods, we ensure your premium spirits arrive safely and on time.
              </p>
              <ul className="space-y-4">
                {['Liquor Delivery in Central Jaipur', 'Liquor Delivery in West Jaipur', 'Liquor Delivery in South Jaipur', 'Liquor Delivery in East Jaipur', 'Liquor Delivery in North Jaipur'].map((area, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{area}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-2 overflow-hidden">
                <img
                  src={whiskyGlass}
                  alt="Premium Whisky Glass"
                  className="w-full h-80 md:h-96 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Looking for  <span className="gold-gradient-text">Premium Liquor Delivery in Jaipur?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
             Contact us today for premium liquor delivery in Jaipur. From fine whisky and wine to beer and spirits, we’re here to help you find the perfect bottle for any occasion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                {/* <a href="tel:+91 6377663382" className="flex items-center gap-2"> */}
                <a href="tel:+91 " className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {/* Call +91 6377663382 */}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  // href="https://wa.me/6377663382"
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-8">
              We do not sell alcohol online. Contact us for enquiries only. Alcohol delivery is subject to local laws. Must be 21+ to order.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
