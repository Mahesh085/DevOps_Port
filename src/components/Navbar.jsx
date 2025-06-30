export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">DevOps Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
      </ul>
    </nav>
  );
}