import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is CryptoCC?',
    answer:
      'CryptoCC is a next-generation trading platform offering real-time charts, on-chain security, and seamless swaps in dark mode.',
  },
  {
    question: 'How do I fund my account?',
    answer:
      'Navigate to your dashboard, select “Deposit”, choose your preferred asset, and follow the on-screen instructions to transfer funds.',
  },
  {
    question: 'What trading pairs are supported?',
    answer:
      'We support BTC/USD, ETH/USD, SOL/USDT, and a growing list of DeFi tokens—check our Markets page for the full list.',
  },
  {
    question: 'Is my wallet secure?',
    answer:
      'Yes—CryptoCC is non-custodial. You retain private keys in your browser or wallet app; we never hold your funds.',
  },
  {
    question: 'How can I get support?',
    answer:
      'Visit our Help Center or join our Telegram community for 24/7 support from the CryptoCC team.',
  },
];

const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-cyan-200"
    >
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-extrabold drop-shadow-md">FAQs</h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-cyan-200/80">
          Your top questions about CryptoCC, answered.
        </p>
      </div>
      <div className="container mx-auto space-y-4 px-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            whileHover={{ boxShadow: '0 0 20px rgba(0,255,255,0.2)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-600 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-semibold text-cyan-300">
                {faq.question}
              </span>
              <span className="text-cyan-200">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-cyan-200/80"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
 