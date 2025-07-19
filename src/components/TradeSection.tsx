import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {  SiSpeedtest } from 'react-icons/si';

const data = [
  { time: '00:00', price: 44000 },
  { time: '04:00', price: 45000 },
  { time: '08:00', price: 46000 },
  { time: '12:00', price: 45500 },
  { time: '16:00', price: 47000 },
  { time: '20:00', price: 46500 },
  { time: '24:00', price: 48000 },
];

const features = [
  {
    icon: SiSpeedtest,
    title: 'Real-Time Order Book',
    desc: 'Track live buy/sell walls and execute orders at lightning speed.',
  },
  {
    icon: SiSpeedtest,
    title: 'On-Chain Security',
    desc: 'Non-custodial architecture ensures your funds stay in your wallet.',
  },
  {
    icon: SiSpeedtest,
    title: 'Low Trading Fees',
    desc: 'Enjoy industry-leading fees without sacrificing performance.',
  },
];

const TradeSection: FC = () => (
  <section
    id="trade"
    className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-cyan-200"
  >
    <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-md">
      Trade with CryptoCC
    </h2>

    <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
      <motion.div
        className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-600 rounded-xl p-6 shadow-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold mb-4 text-cyan-300">
          BTC/USD (24h)
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="time" tick={{ fill: '#4FD1C5' }} />
            <YAxis tick={{ fill: '#4FD1C5' }} />
            <Tooltip contentStyle={{ backgroundColor: '#1A202C', border: 'none' }} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#4FD1C5"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        className="flex-1 flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1663931932651-ea743c9a0144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxiaXRjb2lufGVufDB8fDB8fHww"
          alt="Crypto Trading"
          className="rounded-lg shadow-lg"
        />
        <p className="max-w-md">
          CryptoCC’s trading engine combines institutional-grade charts with a
          user-friendly interface. Execute market, limit, and stop orders seamlessly,
          while our matching engine processes thousands of transactions per second.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-400 text-black rounded-lg font-semibold shadow-lg hover:scale-105 transition">
          Start Trading
        </button>
      </motion.div>
    </div>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4">
      {features.map(({ icon: Icon, title, desc }, i) => (
        <motion.div
          key={title}
          className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-lg border border-cyan-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <Icon size={40} className="text-cyan-400 mb-4" />
          <h4 className="text-lg font-bold mb-2 text-cyan-300">{title}</h4>
          <p className="text-sm text-cyan-200/80">{desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TradeSection;
