// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
        <p className="mb-4">&copy; {new Date().getFullYear()} Elite Fitness. All rights reserved.</p>
        <div className="space-x-6">
          <a href="/contact" className="hover:text-green-500 transition">Contact</a>
          <a href="#" className="hover:text-green-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-green-500 transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}