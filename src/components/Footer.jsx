import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-8 mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto space-y-4"
      >
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/YOUR_USERNAME " target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/YOUR_PROFILE " target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:you@example.com" className="hover:text-blue-400 transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">Built with ❤️ using React & Tailwind</p>
      </motion.div>
    </footer>
  );
}
