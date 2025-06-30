import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-24 px-6 text-center">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-extrabold mb-4"
      >
        Hi, I'm John Doe
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl mb-6 max-w-2xl mx-auto"
      >
        Senior DevOps Engineer | CI/CD Automation | Cloud Infrastructure
      </motion.p>
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="mx-auto rounded-full w-36 h-36 object-cover border-4 border-white shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      />
    </section>
  );
}
