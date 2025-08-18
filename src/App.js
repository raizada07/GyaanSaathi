import React, { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showTutorForm, setShowTutorForm] = useState(false);

  const [selectedClass, setSelectedClass] = useState(""); 
  const [selectedIdProof, setSelectedIdProof] = useState("");

  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [schoolName, setSchoolName] = useState("");
const [boardName, setBoardName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    studentName,
    studentClass,
    subject,
    phone,
    city,
    schoolName,
    boardname
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyoW6WK3RYllFYmOHpxjIqhN8Pif_4aS_cqs2YqlD5vnL1VW-iaHLbQtKqBvyEXDrRa/exec", {
      method: "POST",
      mode: "no-cors",   // 👈 important for bypass CORS
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error occurred. Try again.");
  }
};
  const handleBookDemo = (className = "") => {
    setSelectedClass(className);
    setShowForm(true);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="GyaanSaathi Logo" className="w-20 sm:w-24 md:w-32 h-auto" />
          <h1 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
            Welcome To GyaanSaathi Home Tutor
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

      {/* Student Form */}
      {showForm && (
        <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6 mt-auto mb-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Book a Free Demo Class</h2>

            {formSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center font-semibold">
                🎉 Congratulations! Your request has been submitted.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="w-full border p-3 rounded-lg" required />

              <div className="flex flex-wrap gap-2">
                {["1-5", "6-8", "9-10", "11-12"].map((cls) => (
                  <button
                    type="button"
                    key={cls}
                    onClick={() => setStudentClass(cls)}
                    className={`px-4 py-2 rounded-lg border ${studentClass === cls ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                  >
                    {cls}
                  </button>
                ))}
              </div>

              <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full border p-3 rounded-lg" required />
              <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border p-3 rounded-lg" required />
              <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="w-full border p-3 rounded-lg" required />
              <input type="text" placeholder="School Name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} className="w-full border p-3 rounded-lg" />
              
              <select value={boardName} onChange={(e) => setBoardName(e.target.value)} className="w-full border p-3 rounded-lg" required>
                <option value="">Select Board</option>
                <option value="MP Board">MP Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="International">International</option>
                <option value="Other">Other</option>
              </select>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">Submit</button>
              <button type="button" onClick={() => setShowForm(false)} className="w-full mt-2 bg-gray-300 py-2 rounded-lg">Cancel</button>
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-10 shadow-inner">
        <h2 className="text-center text-gray-800 text-lg font-bold">Connect With Us</h2>
        <div className="flex justify-center gap-6 mt-4 text-blue-700 font-medium">
          <a href="https://www.facebook.com/gyaansaathihometutor" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
          <a href="https://www.instagram.com/gyaansaathihometutor" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          <a href="https://wa.me/918815883226" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          <a href="https://wa.me/917897344923" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          <a href="https://www.linkedin.com/in/gyaansaathihometutor" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
        </div>
        <p className="text-center text-gray-500 mt-4 text-sm">© 2025 GyaanSaathi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
