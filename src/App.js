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
  const data = {
    name: studentName,
    studentClass: studentClass,
    subject: subject,
    phone: phone,
    city: city,
    school: schoolName,
    board: boardName,
  };

  try {
    const response = await fetch(
      "https://https://script.google.com/macros/s/AKfycbyymr-xqH2i_6MqkgQHR6cAmfUg_4av3nd-UIu9cLHHVdkyGiznpZb3aNvDhMpnlGV7eQ/exec," // replace with your actual URL
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      setStudentName("");
      setStudentClass("");
      setSubject("");
      setPhone("");
      setCity("");
      setSchoolName("");
      setBoardName("");
      setFormSubmitted(true);
    } else {
      alert("Failed to submit. Try again.");
    }
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

      {/* Form */}
      {showForm && (
        <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6 mt-auto mb-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Book a Free Demo Class</h2>

            {formSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center font-semibold">
                🎉 Congratulations! Your request has been submitted.
              </div>
            )}

           <form
  onSubmit={handleSubmit}
  className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto mt-6 space-y-4"
>
  {/* Student Name */}
  <input
    type="text"
    placeholder="Student Name"
    value={studentName}
    onChange={(e) => setStudentName(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  {/* Student Class (Buttons) */}
  <div className="flex flex-wrap gap-2">
    {["1-5", "6-8", "9-10", "11-12"].map((cls) => (
      <button
        type="button"
        key={cls}
        onClick={() => setStudentClass(cls)}
        className={`px-4 py-2 rounded-lg border ${
          studentClass === cls
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700"
        }`}
      >
        {cls}
      </button>
    ))}
  </div>

  {/* Subject */}
  <input
    type="text"
    placeholder="Subject"
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  {/* Phone Number */}
  <input
    type="tel"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  {/* City */}
  <input
    type="text"
    placeholder="City"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  {/* School Name */}
  <input
    type="text"
    placeholder="School Name"
    value={schoolName}
    onChange={(e) => setSchoolName(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  {/* Board Name Dropdown */}
  <select
    value={boardName}
    onChange={(e) => setBoardName(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="">Select Board</option>
    <option value="MP Board">MP Board</option>
    <option value="CBSE">CBSE</option>
    <option value="ICSE">ICSE</option>
    <option value="International">International</option>
    <option value="Other">Other</option>
  </select>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
  >
    Submit
  </button>

  {/* Success Message */}
  {formSubmitted && (
    <p className="text-green-600 font-semibold text-center">
      🎉 Thank you! Your demo class request has been submitted.
    </p>
  )}
</form>
     
      </div>
        </section>
      )}
{showTutorForm && (
 <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
<div className={`bg-white rounded-xl shadow-xl w-full max-w-xl p-6 "mt-0" : "mt-auto mb-10"`}>

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
      <footer className="bg-gray-100 py-6 mt-10 shadow-inner">
  <h2 className="text-center text-gray-800 text-lg font-bold">Connect With Us</h2>
  <div className="flex justify-center gap-6 mt-4 text-blue-700 text-base font-medium">
    <a href="https://www.facebook.com/gyaansaathihometutor" target="_blank" rel="noopener noreferrer" className="hover:underline">
      📘 Facebook
    </a>
    <a href="https://www.instagram.com/gyaansaathihometutor" target="_blank" rel="noopener noreferrer" className="hover:underline">
      📸 Instagram
    </a>
    <a href="https://wa.me/918815883226" target="_blank" rel="noopener noreferrer" className="hover:underline">
      💬 WhatsApp
    </a>
    <a href="https://www.linkedin.com/in/gyaansaathihometutor" target="_blank" rel="noopener noreferrer" className="hover:underline">
      💼 LinkedIn
    </a>
  </div>
  <p className="text-center text-gray-500 mt-4 text-sm">© 2025 GyaanSaathi. All rights reserved.</p>
</footer>


        
    </div>
  );
}

export default App;
