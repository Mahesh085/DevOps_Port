export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p className="mt-2">
        <a href="mailto:you@example.com" className="underline">Contact Me</a>
      </p>
    </footer>
  );
}