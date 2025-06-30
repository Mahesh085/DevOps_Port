import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "CI/CD Pipeline",
      description: "Automated deployment pipeline using GitHub Actions and Docker.",
      image: "https://via.placeholder.com/400x200 ",
      badge: "https://github.com/YOUR_USERNAME/devops-portfolio/actions/workflows/deploy.yml/badge.svg "
    },
    {
      title: "Infrastructure as Code",
      description: "Terraform scripts to automate AWS infrastructure provisioning.",
      image: "https://via.placeholder.com/400x200 "
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">My DevOps Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 shadow-lg p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={project.image} alt={project.title} className="rounded mb-4 w-full" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            {project.badge && <img src={project.badge} alt="Build Status" className="mt-4" />}
          </motion.div>
        ))}
      </div>
    </section>
  );
}