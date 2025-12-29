import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  index: number;
}

const ProductCard = ({ name, category, image, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group glass-card overflow-hidden"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-4 md:p-6">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">
          {category}
        </span>
        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProductCard;
