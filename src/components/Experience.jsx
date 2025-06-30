export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>
      <div className="max-w-3xl mx-auto">
        <div className="border-l-4 border-blue-500 pl-4 mb-6">
          <h3 className="text-xl font-semibold">DevOps Engineer</h3>
          <p className="text-gray-600">Company Name | 2020–Present</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Automated deployment pipelines for microservices</li>
            <li>Designed scalable cloud architecture on AWS</li>
          </ul>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">Systems Administrator</h3>
          <p className="text-gray-600">Previous Company | 2018–2020</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Maintained Linux servers and monitoring systems</li>
            <li>Implemented Ansible automation for configuration management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}