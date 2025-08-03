import React from "react";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
         <h1 className="text-2xl font-bold text-blue-600">GyaanSaathi</h1>
    <img src="./logo.png" alt="GyaanSaathi Logo" className="w-24 h-auto" />

        <a
          href="#demo"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
            {/* Book Free Demo Form */}
<section className="py-12 px-4 bg-white max-w-2xl mx-auto" id="demo-form">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book a Free Demo Class</h2>
  <form className="space-y-4">
    <input
      type="text"
      placeholder="Student Name"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <input
      type="text"
      placeholder="Class (e.g., 8th, 10th)"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <input
      type="text"
      placeholder="Subject (e.g., Math, Science)"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <input
      type="text"
      placeholder="City"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
    >
      Submit Request
    </button>
  </form>
</section>

          Book Free Demo Class
        </a>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-blue-50">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Find The Perfect Home Tutor for Your Child
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          GyaanSaathi connects students with top tutors for classes 1–12. 100% verified & trusted.
        </p>
        <a
          href="#demo"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
        >
          Book Free Demo Class
        </a>
      </section>

      {/* Services */}
      <section className="py-12 px-6">
        <h3 className="text-3xl font-bold text-center mb-8">We Provide Tutors For</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {["Class 1–5", "Class 6–8", "Class 9–10", "Class 11–12", "CBSE / ICSE / State", "All Subjects"].map((item) => (
            <div key={item} className="bg-white shadow-md p-6 rounded-xl border hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-gray-800">{item}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-12 px-6" id="demo">
        <h3 className="text-3xl font-bold text-center mb-8">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">1. Book a Free Demo</h4>
            <p className="text-gray-600">Fill a simple form or click the demo button</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">2. We Match a Tutor</h4>
            <p className="text-gray-600">We find the best available tutor for your need</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">3. Start Your Learning</h4>
            <p className="text-gray-600">Begin home tuitions at your convenience</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-12">
        <p>&copy; 2025 GyaanSaathi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
