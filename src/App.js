import React, { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showTutorForm, setShowTutorForm] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="GyaanSaathi Logo" className="w-20 h-auto" />
          <h1 className="text-2xl font-bold text-blue-600">GyaanSaathi</h1>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setShowStudentForm(true);
              setShowTutorForm(false);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Book Free Demo
          </button>
          <button
            onClick={() => {
              setShowTutorForm(true);
              setShowStudentForm(false);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Apply as a Tutor
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-12 px-4 bg-blue-50">
        <h2 className="text-3xl font-bold">Find The Perfect Home Tutor</h2>
        <p className="text-gray-600 mt-2">
          GyaanSaathi connects students with trusted home tutors from class 1–12.
        </p>
      </section>

      {/* Class Buttons */}
      <section className="py-6 px-4 text-center">
        <h3 className="text-2xl font-semibold mb-4">Select Your Class</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {["1-5", "6-8", "9-10", "11-12"].map((cls) => (
            <button
              key={cls}
              onClick={() => {
                setSelectedClass(cls);
                setShowStudentForm(true);
                setShowTutorForm(false);
              }}
              className="bg-gray-200 hover:bg-blue-100 px-4 py-2 rounded-lg"
            >
              Class {cls}
            </button>
          ))}
        </div>
      </section>

      {/* STUDENT FORM */}
      {showStudentForm && (
        <section className="py-10 px-4 bg-white max-w-xl mx-auto rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Book a Free Demo Class</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Student Name"
              className="w-full border p-3 rounded"
              required
            />
            <input
              type="text"
              placeholder="Class"
              value={selectedClass}
              className="w-full border p-3 rounded"
              readOnly
            />
            <input
              type="text"
              placeholder="School Name"
              className="w-full border p-3 rounded"
              required
            />
            <select className="w-full border p-3 rounded" required>
              <option value="">Select Board</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="MP">MP Board</option>
              <option value="International">International</option>
            </select>
            <input
              type="text"
              placeholder="Subjects"
              className="w-full border p-3 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border p-3 rounded"
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("🎉 Thank you! We will contact you soon.");
              }}
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        </section>
      )}

      {/* TUTOR FORM */}
      {showTutorForm && (
        <section className="py-10 px-4 bg-white max-w-2xl mx-auto rounded-xl shadow-lg mt-6">
          <h2 className="text-2xl font-bold text-center mb-6">Apply as a Tutor</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" required />
            <select className="w-full border p-3 rounded" required>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input type="date" placeholder="Date of Birth" className="w-full border p-3 rounded" required />
            <input type="file" accept="image/*" className="w-full border p-3 rounded" required />
            <input type="tel" placeholder="Contact Number" className="w-full border p-3 rounded" required />
            <input type="email" placeholder="Email ID" className="w-full border p-3 rounded" required />
            <textarea placeholder="Full Address" className="w-full border p-3 rounded" required></textarea>
            <input type="text" placeholder="Highest Education" className="w-full border p-3 rounded" required />
            <input type="text" placeholder="Year of Passing" className="w-full border p-3 rounded" required />
            <input type="text" placeholder="Teaching Experience (years)" className="w-full border p-3 rounded" required />
            <input type="text" placeholder="Classes You Can Teach" className="w-full border p-3 rounded" required />
            <input type="text" placeholder="Preferred Timing" className="w-full border p-3 rounded" required />
            <select className="w-full border p-3 rounded" required>
              <option value="">Select ID Proof</option>
              <option>Aadhar Card</option>
              <option>PAN Card</option>
              <option>Driving License</option>
            </select>
            <div className="flex items-start gap-2">
              <input type="checkbox" required />
              <label>I confirm all the details are true.</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" required />
              <label>I agree to follow given all guidelines.</label>
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("✅ Tutor application submitted!");
              }}
              className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
            >
              Submit Application
            </button>
          </form>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-10">
        <p>&copy; 2025 GyaanSaathi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
