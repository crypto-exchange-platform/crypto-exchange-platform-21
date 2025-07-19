import { FC } from 'react';
import {
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer: FC = () => (
  <footer className="py-12 bg-gradient-to-t from-black via-gray-900 to-gray-800 text-cyan-200">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-cyan-400">CryptoCC</h3>
        <p className="text-cyan-200/80 max-w-sm">
          Empowering the future of finance with secure, real-time crypto trading.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4 text-cyan-300">Quick Links</h4>
        <ul className="space-y-2">
          {['Home', 'Markets', 'Trade', 'Portfolio', 'News', 'FAQ'].map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-100 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4 text-cyan-300">
          Connect With Us
        </h4>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-cyan-100 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-cyan-100 transition">
            <FaGithub size={24} />
          </a>
          <a href="#" className="hover:text-cyan-100 transition">
            <FaTelegramPlane size={24} />
          </a>
        </div>
        <p className="text-cyan-200/80 text-sm">
          © {new Date().getFullYear()} CryptoCC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
 