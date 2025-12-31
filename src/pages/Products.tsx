import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

import whiskyImage from '@/assets/hero-bottles.jpg';
import vodkaImage from '@/assets/vodka-bottle.jpg';
import rumImage from '@/assets/rum-bottle.jpg';
import wineImage from '@/assets/wine-bottle.jpg';
import beerImage from '@/assets/beer-bottles.jpg';
import blackLabelImg from '@/assets/black-label.jpg';
import royalStagImg from '@/assets/royal-stag.jpg';
import blendersPrideImg from '@/assets/blenders-pride.jpg';
import teachersImg from '@/assets/teachers.jpg';
import absoluteVodkaImg from '@/assets/absolute-vodka.jpg';
import smirnoffImg from '@/assets/smirnoff.jpg';
import magicMomentsImg from '@/assets/magic-moments.jpg';
import oldMonkImg from '@/assets/old-monk.jpg';
import mcdowellsImg from '@/assets/mcdowells.jpg';
import sulaImg from '@/assets/sula.jpg';
import kingfisherImg from '@/assets/kingfisher.jpg';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Whisky', 'Vodka', 'Rum', 'Wine', 'Beer'];

  const products = [
    { name: 'Black Label', category: 'Whisky', image: blackLabelImg },
    { name: 'Royal Stag', category: 'Whisky', image: royalStagImg },
    { name: 'Blenders Pride', category: 'Whisky', image: blendersPrideImg },
    { name: 'Teachers\'s', category: 'Whisky', image: teachersImg },
    // { name: 'Single Malt Scotch', category: 'Whisky', image: whiskyImage },
    // { name: 'Premium Bourbon', category: 'Whisky', image: whiskyImage },
    // { name: 'Irish Whiskey', category: 'Whisky', image: whiskyImage },
    { name: 'Absolute Vodka', category: 'Vodka', image: absoluteVodkaImg },
    { name: 'Smirnoff', category: 'Vodka', image: smirnoffImg },
    { name: 'Magic Moments', category: 'Vodka', image: magicMomentsImg },
    // { name: 'Crystal Vodka', category: 'Vodka', image: vodkaImage },
    // { name: 'Premium Vodka', category: 'Vodka', image: vodkaImage },
    // { name: 'Flavored Vodka', category: 'Vodka', image: vodkaImage },
    { name: 'Old Monk', category: 'Rum', image: oldMonkImg },
    { name: 'McDowell\'s', category: 'Rum', image: mcdowellsImg },
    // { name: 'Dark Spiced Rum', category: 'Rum', image: rumImage },
    // { name: 'White Rum', category: 'Rum', image: rumImage },
    // { name: 'Caribbean Aged Rum', category: 'Rum', image: rumImage },
    { name: 'Sula', category: 'Wine', image: sulaImg },
    // { name: 'Cabernet Sauvignon', category: 'Wine', image: wineImage },
    // { name: 'Chardonnay', category: 'Wine', image: wineImage },
    // { name: 'Champagne', category: 'Wine', image: wineImage },
    { name: 'Kingfisher', category: 'Beer', image: kingfisherImg },
    // { name: 'Craft IPA', category: 'Beer', image: beerImage },
    // { name: 'Premium Lager', category: 'Beer', image: beerImage },
    // { name: 'Stout', category: 'Beer', image: beerImage },
  ];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

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
            <span className="text-primary uppercase tracking-widest text-sm">Our Collection</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              Premium <span className="gold-gradient-text">Spirits</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our curated selection of the world's finest liquors. 
              Contact us to enquire about availability and delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-charcoal-dark sticky top-16 z-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-card text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={`${product.name}-${index}`}
                name={product.name}
                category={product.category}
                image={product.image}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-charcoal-dark">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 text-center max-w-2xl mx-auto"
          >
            <p className="text-muted-foreground text-sm">
              <strong className="text-foreground">Note:</strong> We do not display prices online. 
              Product availability and pricing may vary. Please contact us via phone or WhatsApp 
              for current availability and to place orders.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
