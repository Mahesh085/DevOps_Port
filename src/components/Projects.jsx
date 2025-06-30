import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "CI/CD Pipeline",
      description: "Automated deployment pipeline using GitHub Actions and Docker.",
      badge: "https://github.com/YOUR_USERNAME/devops-portfolio/actions/workflows/deploy.yml/badge.svg "
    },
    {
      title: "Infrastructure as Code",
      description: "Terraform scripts to automate AWS infrastructure provisioning."
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My DevOps Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              {project.badge && <img src={project.badge} alt="Build Status" className="mt-2" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
