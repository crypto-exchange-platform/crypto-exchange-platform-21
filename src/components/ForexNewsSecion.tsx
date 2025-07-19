// src/components/ForexNewsSection.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import ForexCard from './ForexCard';
const newsItems = [
  {
    title: 'USD/JPY Hits Six-Month High',
    description:
      'The USD/JPY pair surged as investors flocked to safe-haven dollar amid global uncertainty.',
    imageUrl: 'https://images.unsplash.com/photo-1669060475309-33f02dc5404a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5mdCUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D',
    link: '#',
  },
  {
    title: 'EUR/GBP Slides on BoE Outlook',
    description:
      'Sterling outperformed the euro after the Bank of England signaled potential rate hikes.',
    imageUrl: 'https://images.unsplash.com/photo-1666384805384-b21141eaca45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmZ0JTIwbWFya2V0fGVufDB8fDB8fHww',
    link: '#',
  },
  {
    title: 'Emerging Markets Rally',
    description:
      'Currencies in emerging markets gained ground as commodity prices recovered.',
    imageUrl: 'https://images.unsplash.com/photo-1666811722587-b5a1885b21f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmZ0JTIwbWFya2V0fGVufDB8fDB8fHww',
    link: '#',
  },
  {
    title: 'AUD/USD Trades Near Resistance',
    description:
      'The Aussie dollar approaches key resistance levels ahead of RBA meeting.',
    imageUrl: 'https://images.unsplash.com/photo-1666816943035-15c29931e975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5mdCUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D',
    link: '#',
  },
  {
    title: 'Crypto Influence on FX',
    description:
      'Digital assets volatility spills into forex, pushing traders to adjust hedges.',
    imageUrl: 'https://media.istockphoto.com/id/1336131137/photo/cloud-computing-nft-ai-artificial-intelligence.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xn9runOUc8jLPUeo4-FuyDm1xXTwhdA_wi79fRfLuyk=',
    link: '#',
  },
  {
    title: 'CAD Strengthens on Oil Boom',
    description:
      'Canadian dollar up as oil prices hit multi-year highs, boosting resource exports.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675018587770-b40d4a0d59e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5mdCUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D',
    link: '#',
  },
];

const ForexNewsSection: FC = () => (
  <section
    id="news"
    className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-cyan-200"
  >
    <div className="text-center mb-8 px-4">
      <h2 className="text-4xl font-extrabold drop-shadow-md">
        Forex News & Insights
      </h2>
      <p className="mt-2 max-w-2xl mx-auto text-lg text-cyan-200/80">
        Stay on top of currency market moves with expert analysis and up-to-the-minute updates.
      </p>
    </div>

    <motion.div
      className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {newsItems.map(item => (
        <ForexCard
          key={item.title}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          link={item.link}
        />
      ))}
    </motion.div>
  </section>
);

export default ForexNewsSection;
 