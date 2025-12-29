import { motion } from 'framer-motion';
import { Shield, Truck, Award, Heart } from 'lucide-react';
import whiskyGlass from '@/assets/whisky-glass.jpg';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
            <span className="text-primary uppercase tracking-widest text-sm">About Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              Who <span className="gold-gradient-text">We Are</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              OneBottleDown is your trusted partner for premium liquor delivery. 
              We bring the finest selection of spirits directly to your doorstep with 
              speed, discretion, and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-charcoal-dark">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <img
                src={whiskyGlass}
                alt="Premium Spirits"
                className="w-full h-80 md:h-[500px] object-cover rounded-xl glass-card"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our <span className="gold-gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a passion for fine spirits and exceptional service, 
                  OneBottleDown was born from the belief that premium liquor delivery 
                  should be an effortless, luxurious experience.
                </p>
                <p>
                  Our team of connoisseurs carefully curates a selection of the world's 
                  finest whiskies, vodkas, rums, wines, and beers, ensuring that every 
                  bottle we deliver meets our exacting standards.
                </p>
                <p>
                  We understand that great moments deserve great drinks, which is why 
                  we're committed to delivering not just products, but experiences 
                  that elevate your celebrations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm">Our Process</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
              How We <span className="gold-gradient-text">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Curated Selection',
                description: 'We handpick only the finest spirits from trusted suppliers and renowned distilleries.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Quality Assurance',
                description: 'Every bottle is verified for authenticity and stored under optimal conditions.'
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'Swift Delivery',
                description: 'Our dedicated team ensures fast, secure delivery to your specified location.'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We go above and beyond for every order.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-charcoal-dark">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm">Our Promise</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
              Trust & <span className="gold-gradient-text">Compliance</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 space-y-6"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Legal Compliance
                </h3>
                <p className="text-muted-foreground">
                  We operate in full compliance with local alcohol regulations. All deliveries 
                  require age verification, and we reserve the right to refuse service if 
                  proper identification cannot be provided.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Responsible Service
                </h3>
                <p className="text-muted-foreground">
                  We promote responsible drinking. Our team is trained to recognize signs of 
                  intoxication and will not deliver to visibly intoxicated individuals.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Privacy & Discretion
                </h3>
                <p className="text-muted-foreground">
                  Your privacy is paramount. All orders are delivered in discreet, 
                  unmarked packaging, and your information is never shared with third parties.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
