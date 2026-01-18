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
            OneBottleDown is a trusted liquor delivery service in Jaipur, offering premium spirits delivered quickly and discreetly to your doorstep. From fine whisky and wine to vodka, rum, and beer, we make enjoying great drinks simple, safe, and reliable.
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
              OneBottleDown was created with a simple idea — premium liquor delivery should be easy, reliable, and stress-free. We wanted to bring the experience of a high-end liquor store directly to customers across Jaipur.
                </p>
                <p>
               Our team carefully selects premium whiskies, vodkas, rums, wines, and beers from trusted brands and suppliers. Every bottle we deliver meets our quality standards, ensuring you always receive authentic and well-stored spirits.
                </p>
                <p>
                 Whether it’s a celebration, a gathering, or a quiet evening at home, we’re here to make sure your favorite drinks reach you on time, every time.
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
              How Our <span className="gold-gradient-text">Liquor Delivery Service Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Carefully Curated Selection',
                description: 'We handpick premium liquor from reliable suppliers, ensuring quality, authenticity, and variety for our customers in Jaipur.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Quality & Authenticity Checks',
                description: 'Every bottle is verified and stored under proper conditions to maintain taste, freshness, and safety.'
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'Fast & Secure Delivery',
                description: 'Our local delivery team ensures quick and secure liquor delivery across Jaipur with careful handling.'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Customer-First Approach',
                description: 'We focus on excellent service, clear communication, and a smooth experience from enquiry to delivery.'
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
              Trust, Safety & <span className="gold-gradient-text">Responsible Service</span>
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
                  Legal & Local Compliance
                </h3>
                <p className="text-muted-foreground">
               We operate in accordance with local alcohol regulations in Rajasthan. All deliveries require valid age verification, and service may be refused if legal requirements are not met.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Responsible Liquor Delivery
                </h3>
                <p className="text-muted-foreground">
                  We support responsible drinking. Our delivery team is trained to ensure alcohol is delivered only when it is safe and appropriate to do so.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Privacy & Discreet Delivery
                </h3>
                <p className="text-muted-foreground">
                 Customer privacy matters to us. All liquor deliveries are packed discreetly, and your personal information is kept secure and confidential.
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
