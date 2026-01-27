import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Our College</h1>
        <ul className="flex gap-6">
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          <li><a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our College</h2>
        <p className="text-lg md:text-2xl mb-8">Learn. Grow. Achieve your dreams with us.</p>
        <div className="flex justify-center gap-4">
          <a href="#about" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">Get Started</a>
          <a href="#features" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Learn More</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-4">Expert Faculty</h3>
          <p>Learn from experienced professors who guide you every step of the way.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-4">Modern Campus</h3>
          <p>State-of-the-art facilities to give you the best learning experience.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-4">Career Support</h3>
          <p>Get guidance for internships, placements, and your future career path.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Our College</h2>
          <p className="mb-6">We are committed to providing a holistic education that nurtures both knowledge and character. Join our vibrant community of learners and achievers.</p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">Contact Us</a>
        </div>
        <div className="md:w-1/2">
          <Image src="/test1.jpg" alt="College Campus" width={600} height={400} className="rounded-lg shadow-lg"/>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-4">Our College</h4>
            <p>Empowering students to achieve academic excellence and personal growth.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-blue-500">Features</a></li>
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p>Email: info@ourcollege.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>
        <p className="text-center mt-8 text-sm">© 2026 Our College. All rights reserved.</p>
      </footer>
    </main>
  )
}
