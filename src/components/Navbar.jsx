export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`py-6 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DevOps Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-blue-500 transition-colors">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a></li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
