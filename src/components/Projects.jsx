export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">My DevOps Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white shadow-lg p-6 rounded">
          <h3 className="text-xl font-semibold mb-2">CI/CD Pipeline</h3>
          <p>Automated deployment pipeline using GitHub Actions and Docker.</p>
          <div className="mt-4">
            <img src="https://github.com/YOUR_USERNAME/devops-portfolio/actions/workflows/deploy.yml/badge.svg " alt="Build Status" />
          </div>
        </div>
        <div className="bg-white shadow-lg p-6 rounded">
          <h3 className="text-xl font-semibold mb-2">Infrastructure as Code</h3>
          <p>Terraform scripts to automate AWS infrastructure provisioning.</p>
        </div>
      </div>
    </section>
  );
}