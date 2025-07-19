import { FC } from 'react';
import { motion } from 'framer-motion';

interface MarketCardProps {
  title: string;
  description: string;
  price: string;
  change: string;
  icon: React.ReactNode;
}

const MarketCard: FC<MarketCardProps> = ({
  title,
  description,
  price,
  change,
  icon,
}) => (
  <motion.div
    whileHover={{
      rotateY: 8,
      rotateX: 8,
      scale: 1.04,
      boxShadow: '0 0 20px rgba(0,255,255,0.3)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-64 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-600 rounded-xl overflow-hidden shadow-lg"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="p-6 flex flex-col items-center text-center gap-3">
      <div className="text-cyan-400 mb-2">{icon}</div>
      <h3 className="text-lg font-bold text-cyan-300">{title}</h3>
      <p className="text-sm text-cyan-200/70">{description}</p>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-xl font-semibold text-cyan-400">{price}</span>
        <span
          className={`text-sm font-medium ${
            change.startsWith('-') ? 'text-red-400' : 'text-green-400'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  </motion.div>
);

export default MarketCard;