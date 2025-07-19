import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { SiBitcoin, SiEthereum, SiSolana } from 'react-icons/si';
import { FaCoins } from 'react-icons/fa';

const distributionData = [
  { name: 'Bitcoin', value: 50, icon: <SiBitcoin size={24} /> },
  { name: 'Ethereum', value: 30, icon: <SiEthereum size={24} /> },
  { name: 'Solana', value: 10, icon: <SiSolana size={24} /> },
  { name: 'Other', value: 10, icon: <FaCoins size={24} /> },
];

const performanceData = [
  { time: 'Jan', value: 10000 },
  { time: 'Feb', value: 12000 },
  { time: 'Mar', value: 11000 },
  { time: 'Apr', value: 14000 },
  { time: 'May', value: 13000 },
  { time: 'Jun', value: 15000 },
];

const COLORS = ['#4FD1C5', '#22D3EE', '#06B6D4', '#0E7490'];

const PortfolioSection: FC = () => (
  <section
    id="portfolio"
    className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-cyan-200 overflow-hidden"
  >
    <img
      src="https://source.unsplash.com/collection/crypto/1200x800"
      alt="Portfolio background"
      className="absolute inset-0 w-full h-full object-cover opacity-10 blur-xl"
    />

    <div className="relative z-10 text-center mb-12 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        Your CryptoCC Portfolio
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-cyan-200/80">
        Track your asset allocation and performance over time. All your holdings in one sleek, secure dashboard.
      </p>
    </div>

    <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-600 rounded-xl p-6 shadow-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-cyan-300 mb-4">
          Asset Allocation
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={distributionData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={4}
              label
            >
              {distributionData.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ color: '#4FD1C5' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-600 rounded-xl p-6 shadow-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-cyan-300 mb-4">
          Portfolio Value (6 Months)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={performanceData} margin={{ left: -20 }}>
            <XAxis
              dataKey="time"
              tick={{ fill: '#4FD1C5' }}
              axisLine={{ stroke: '#4FD1C5' }}
            />
            <YAxis
              tick={{ fill: '#4FD1C5' }}
              axisLine={{ stroke: '#4FD1C5' }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#1A202C', border: 'none' }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4FD1C5"
              strokeWidth={3}
              dot={{ r: 4, fill: '#06B6D4' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>

    <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4">
      {distributionData.map(({ name, value, icon }, idx) => (
        <motion.div
          key={name}
          whileHover={{
            rotateY: 6,
            rotateX: 6,
            scale: 1.05,
            boxShadow: '0 0 20px rgba(0,255,255,0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-600 rounded-xl p-6 flex flex-col items-center gap-3 shadow-lg"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-cyan-400 mb-2">{icon}</div>
          <div className="text-lg font-bold text-cyan-300">{name}</div>
          <div className="text-sm text-cyan-200/70">
            {value}% of portfolio
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PortfolioSection;
 