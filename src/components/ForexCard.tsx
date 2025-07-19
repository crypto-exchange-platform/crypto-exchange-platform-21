import { FC } from 'react';
import { motion } from 'framer-motion';

interface ForexCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ForexCard: FC<ForexCardProps> = ({ title, description, imageUrl, link }) => (
  <motion.div
    whileHover={{
      rotateY: 8,
      rotateX: 8,
      scale: 1.03,
      boxShadow: '0 0 20px rgba(0,255,255,0.3)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="w-full bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-600 rounded-xl overflow-hidden shadow-lg"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <img
      src={imageUrl}
      alt={title}
      className="h-40 w-full object-cover"
    />
    <div className="p-4 flex flex-col gap-3">
      <h3 className="text-lg font-bold text-cyan-300">{title}</h3>
      <p className="text-sm text-cyan-200/70 flex-1">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-400 text-black hover:opacity-90 transition"
      >
        Read More
      </a>
    </div>
  </motion.div>
);

export default ForexCard;
 