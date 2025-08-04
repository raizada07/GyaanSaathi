import React, { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showTutorForm, setShowTutorForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedClass, setSelectedClass] = useState(""); 
  const [selectedIdProof, setSelectedIdProof] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setShowForm(false);
      setSelectedClass(""); // Reset class after form submit
    }, 3000);
  };

  const handleBookDemo = (className = "") => {
    setSelectedClass(className);
    setShowForm(true);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Navbar */}
  <nav className="bg-white shadow-md p-2 flex justify-center items-center">
  <div className="flex items-left gap-2">
    <img src={logo} alt="GyaanSaathi Logo" className="w-20 sm:w-24 md:w-32 h-auto" />
    <h1 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
      Welcome to GyaanSaathi Home Tutor
    </h1>
  </div>
</nav>




      {/* Hero */}
      <section className="text-center py-16 px-4 bg-blue-50">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Find The Perfect Home Tutor for Your Child
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          GyaanSaathi connects students with top tutors for classes 1–12. 100% verified & trusted.
        </p>

        <button
          onClick={() => handleBookDemo("")}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Book Free Demo Class
        </button>
 

<div className="mt-4">
  <button
    onClick={() => setShowTutorForm(true)}
    className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
  >
    Apply as a Tutor
  </button>
</div>

      </section>

      {/* Services */}
      <section className="py-12 px-6">
        <h3 className="text-5xl font-bold text-center mb-8">We Provide Tutors For</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {["Class 1–5", "Class 6–8", "Class 9–10", "Class 11–12", "JEE / NEET / CUET"].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md p-6 rounded-xl border hover:shadow-xl transition cursor-pointer"
              onClick={() => handleBookDemo(item)}
            >
              <h4 className="text-xl font-semibold text-gray-800">{item}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      {showForm && (
        <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className={`bg-white rounded-xl shadow-xl w-full max-w-xl p-6 ${window.innerWidth < 768 ? "mt-0" : "mt-auto mb-10"}`}>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Book a Free Demo Class</h2>

            {formSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center font-semibold">
                🎉 Congratulations! Your request has been submitted.
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Student Name"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  {/* Class Auto-filled */}
  <input
    type="text"
    placeholder="Class"
    value={selectedClass}
    onChange={(e) => setSelectedClass(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  {/* School Name Field */}
  <input
    type="text"
    placeholder="School Name"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  {/* 🆕 Board Dropdown */}
  <select
    required
    className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select Board</option>
    <option value="MP Board">MP Board</option>
    <option value="CBSE">CBSE</option>
    <option value="ICSE">ICSE</option>
    <option value="Other">Other</option>
  </select>

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
    placeholder="Location"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
  >
    Submit Request
  </button>
  <button
    type="button"
    onClick={() => setShowForm(false)}
    className="w-full mt-2 bg-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-400 transition"
  >
    Cancel
  </button>
</form>
     
      </div>
        </section>
      )}
{showTutorForm && (
 <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
<div className={`bg-white rounded-xl shadow-xl w-full max-w-xl p-6 ${window.innerWidth < 768 ? "mt-0" : "mt-auto mb-10"}`}>

    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Apply as a Tutor</h2>
    
  <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("🎉 Congratulations! Your tutor application has been submitted.");
        setShowTutorForm(false);
      }}
      className="space-y-4 max-h-[80vh] overflow-y-auto px-2"
    >
      <input type="text" placeholder="Full Name" required className="w-full border border-gray-300 rounded-lg p-3" />
      <select required className="w-full border border-gray-300 rounded-lg p-3">
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input type="date" required className="w-full border border-gray-300 rounded-lg p-3" />
      <input type="file" accept="image/*" className="w-full border border-gray-300 rounded-lg p-3" />
      <input type="tel" placeholder="Contact Number" required className="w-full border border-gray-300 rounded-lg p-3" />
      <input type="email" placeholder="Email ID" required className="w-full border border-gray-300 rounded-lg p-3" />
      <textarea placeholder="Full Address" required className="w-full border border-gray-300 rounded-lg p-3" />
      <input type="text" placeholder="Highest Education" required className="w-full border border-gray-300 rounded-lg p-3" />
      <input type="text" placeholder="Year of Passing" required className="w-full border border-gray-300 rounded-lg p-3" />
      <input type="text" placeholder="Teaching Experience (in years)" className="w-full border border-gray-300 rounded-lg p-3" />
      <input type="text" placeholder="Classes You Can Teach" required className="w-full border border-gray-300 rounded-lg p-3" />
      <input type="text" placeholder="Preferred Timing" className="w-full border border-gray-300 rounded-lg p-3" />
     <select
  required
  className="w-full border border-gray-300 rounded-lg p-3"
  onChange={(e) => setSelectedIdProof(e.target.value)}
>
  <option value="">Select ID Proof</option>
  <option>Aadhar Card</option>
  <option>PAN Card</option>
  <option>Driving Licence</option>
</select>

{selectedIdProof && (
  <input
    type="text"
    placeholder={`Enter your ${selectedIdProof} Number`}
    required
    className="w-full border border-gray-300 rounded-lg p-3"
  />
)}

      <div className="text-sm text-gray-600 space-y-2">
        <label className="block">
          <input type="checkbox" required className="mr-2" />
          I confirm all the details are true
        </label>
        <label className="block">
          <input type="checkbox" required className="mr-2" />
          I agree to follow all given guidelines
        </label>
      </div>
      <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
        Submit Application
      </button>
      <button type="button" onClick={() => setShowTutorForm(false)} className="w-full mt-2 bg-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-400 transition">
        Cancel
      </button>
    </form>
      </div>
  </section>
)}
      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-12">
        <p>&copy; 2025 GyaanSaathi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
