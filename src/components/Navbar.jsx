export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`py-6 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DevOps Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}