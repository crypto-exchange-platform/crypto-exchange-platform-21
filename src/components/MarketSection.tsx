import { FC } from 'react';
import { motion } from 'framer-motion';
import MarketCard from './MarketCard';
import {
  SiBitcoin,
  SiEthereum,
  SiOpensea,
} from 'react-icons/si';

const markets = [
  {
    title: 'Bitcoin (BTC)',
    description:
      'The original cryptocurrency and store of value, commanding the largest market cap.',
    price: '$102,200',
    change: '+2.3%',
    icon: <SiBitcoin size={40} />,
  },
  {
    title: 'Ethereum (ETH)',
    description:
      'The leading smart contract platform powering DeFi, NFTs, and a vibrant dApp ecosystem.',
    price: '$3,250',
    change: '+1.8%',
    icon: <SiEthereum size={40} />,
  },
  {
    title: 'DeFi Index',
    description:
      'A composite index tracking the top decentralized finance tokens for broad exposure.',
    price: '$1,150',
    change: '-0.5%',
    icon: <SiBitcoin size={40} />,
  },
  {
    title: 'NFT Market',
    description:
      'Overview of trending NFT volumes and collections across major marketplaces.',
    price: '$12,300',
    change: '+4.1%',
    icon: <SiOpensea size={40} />,
  },
];

const MarketSection: FC = () => (
  <section
    id="markets"
    className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-cyan-200"
  >
    <div className="text-center mb-8 px-4">
      <h2 className="text-4xl font-extrabold drop-shadow-md">Market Overview</h2>
      <p className="mt-2 max-w-2xl mx-auto text-lg text-cyan-200/80">
        Stay ahead with real-time data, expert insights, and summaries of the top crypto markets.
      </p>
    </div>

    <motion.div
      className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 justify-items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {markets.map((mkt) => (
        <MarketCard
          key={mkt.title}
          title={mkt.title}
          description={mkt.description}
          price={mkt.price}
          change={mkt.change}
          icon={mkt.icon}
        />
      ))}
    </motion.div>
  </section>
);

export default MarketSection;
