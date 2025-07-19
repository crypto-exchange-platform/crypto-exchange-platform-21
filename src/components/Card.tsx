import { FC } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  name: string;
  symbol: string;
  price: string;
  icon: React.ReactNode;
}

const Card: FC<CardProps> = ({ name, symbol, price, icon }) => (
  <motion.div
    whileHover={{
      rotateY: 10,
      rotateX: 10,
      scale: 1.05,
      boxShadow: '0 0 20px rgba(0,255,255,0.3)',
    }}
    whileTap={{ rotateY: 0, rotateX: 0, scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-48 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-600 rounded-xl p-6 flex flex-col items-center gap-2"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="w-12 h-12 mb-2 text-cyan-400">{icon}</div>
    <div className="text-xl font-bold text-cyan-300">{name}</div>
    <div className="text-sm text-cyan-200/70">{symbol}</div>
    <div className="mt-2 text-lg font-semibold text-cyan-400 drop-shadow-md">{price}</div>
  </motion.div>
);

export default Card;
