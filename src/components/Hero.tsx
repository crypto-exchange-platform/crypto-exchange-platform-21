import { FC } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { SiBitcoin, SiEthereum, SiSolana } from 'react-icons/si';

const cryptos = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$45,000', icon: <SiBitcoin size={32} /> },
  { name: 'Ethereum', symbol: 'ETH', price: '$3,200', icon: <SiEthereum size={32} /> },
  { name: 'Solana', symbol: 'SOL', price: '$140', icon: <SiSolana size={32} /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.8 + i * 0.2, type: 'spring', stiffness: 300, damping: 20 },
  }),
};

const Hero: FC = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800"
  >
    <motion.div
      className="absolute w-80 h-80 bg-gray-800/20 rounded-full top-12 left-1/3 blur-3xl"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute w-64 h-64 bg-gray-700/20 rounded-full bottom-12 right-1/4 blur-2xl"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 7, repeat: Infinity, delay: 2 }}
    />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 text-center max-w-2xl"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 leading-tight drop-shadow-lg">
        CryptoCC: The Future of Crypto Trading
      </h1>
      <p className="mt-4 text-lg text-cyan-200/80">
        At CryptoCC, we empower you with advanced tools, real-time market insights, and rock-solid on-chain security—join us in building tomorrow’s finance.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-400 text-black font-semibold shadow-md transition"
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          className="px-6 py-3 rounded-lg border border-cyan-300 text-cyan-300 font-semibold shadow-md transition"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>

    <div
      className="relative z-10 mt-16 flex flex-wrap gap-8 justify-center"
      style={{ perspective: 1000 }}
    >
      {cryptos.map((crypto, i) => (
        <motion.div
          key={crypto.symbol}
          custom={i}
          initial="hidden"
          animate="visible"
        >
          <Card {...crypto} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Hero;
