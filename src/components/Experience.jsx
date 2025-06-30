import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          <motion.div
            className="flex items-start space-x-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 bg-blue-500 rounded"></div>
            <div>
              <h3 className="text-xl font-semibold">DevOps Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">Company Name | 2020–Present</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Automated deployment pipelines for microservices</li>
                <li>Designed scalable cloud architecture on AWS</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 bg-blue-500 rounded"></div>
            <div>
              <h3 className="text-xl font-semibold">Systems Administrator</h3>
              <p className="text-gray-600 dark:text-gray-400">Previous Company | 2018–2020</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Maintained Linux servers and monitoring systems</li>
                <li>Implemented Ansible automation for configuration management</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
