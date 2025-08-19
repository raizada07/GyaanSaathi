import React, { useState } from "react";
import logo from "./assets/logo.png";
import './App.css';

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
  // Tutor form states
const [fullName, setFullName] = useState("");
const [gender, setGender] = useState("");
const [dob, setDob] = useState("");
const [contact, setContact] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [education, setEducation] = useState("");
const [yearOfPassing, setYearOfPassing] = useState("");
const [experience, setExperience] = useState("");
const [classesTeach, setClassesTeach] = useState("");
const [timing, setTiming] = useState("");
const [idProofType, setIdProofType] = useState("");
const [idProofNumber, setIdProofNumber] = useState("");
const [tutorSubmitted, setTutorSubmitted] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {
    formType: "demo",           
    studentName,
    studentClass,
    subject,
    phone,
    city,
    schoolName,
    boardName,
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbyoW6WK3RYllFYmOHpxjIqhN8Pif_4aS_cqs2YqlD5vnL1VW-iaHLbQtKqBvyEXDrRa/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // reset + success
    setStudentName(""); setStudentClass(""); setSubject("");
    setPhone(""); setCity(""); setSchoolName(""); setBoardName("");
    setFormSubmitted(true);
    alert("Demo request submitted ✅");
  } catch (err) {
    console.error(err);
    alert("Submission failed. Please try again.");
  }
};
const handleTutorSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    formType: "tutor",      
    fullName,
    gender,
    dob,
    contact,
    email,
    address,
    education,
    yearOfPassing,
    experience,
    classes: classesTeach,   
    timing,
    idProofType,
    idProofNumber,
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbyoW6WK3RYllFYmOHpxjIqhN8Pif_4aS_cqs2YqlD5vnL1VW-iaHLbQtKqBvyEXDrRa/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // reset + success
    setFullName(""); setGender(""); setDob("");
    setContact(""); setEmail(""); setAddress("");
    setEducation(""); setYearOfPassing(""); setExperience("");
    setClassesTeach(""); setTiming("");
    setIdProofType(""); setIdProofNumber("");
    setTutorSubmitted(true);
    alert("Tutor application submitted ✅");
    setShowTutorForm(false);
  } catch (err) {
    console.error(err);
    alert("Submission failed. Please try again.");
  }
};

 
  const handleBookDemo = (className = "") => {
    setSelectedClass(className);
    setShowForm(true);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg p-4 flex justify-center items-center text-white">
        <div className="flex items-center gap-2">
          <img src={logo} alt="GyaanSaathi Logo" className="w-20 sm:w-24 md:w-32 h-auto" />
          <h1 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
            Welcome To GyaanSaathi Home Tutor
          </h1>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Find The Perfect Home Tutor for Your Child
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          GyaanSaathi connects students with top tutors for classes 1–12. 100% verified & trusted.
        </p>

        <button
          onClick={() => handleBookDemo("")}
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-blue-700 transition transform"

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
                {["1-5", "6-8", "9-10", "11-12", "JEE / NEET / CUET"].map((cls) => (
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
              <input type="text" placeholder="Location" value={city} onChange={(e) => setCity(e.target.value)} className="w-full border p-3 rounded-lg" required />
              <input type="text" placeholder="School Name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} className="w-full border p-3 rounded-lg" />
              
              <select value={boardName} onChange={(e) => setBoardName(e.target.value)} className="w-full border p-3 rounded-lg" required>
                <option value="">Select Board</option>
                <option value="MP Board">MP Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="Other">Other</option>
              </select>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">Submit</button>
              <button type="button" onClick={() => setShowForm(false)} className="w-full mt-2 bg-gray-300 py-2 rounded-lg">Cancel</button>
            </form>
          </div>
        </section>
      )}

     {showTutorForm && (
  <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 max-h-[85vh] overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Apply as a Tutor</h2>

      {tutorSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center font-semibold">
          🎉 Your application has been submitted.
        </div>
      )}

      <form onSubmit={handleTutorSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="border p-3 rounded-lg" placeholder="Full Name" value={fullName} onChange={e=>setFullName(e.target.value)} required />
        
        <select className="border p-3 rounded-lg" value={gender} onChange={e=>setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option>Male</option><option>Female</option><option>Other</option>
        </select>

         
        <label className="block mb-1 text-gray-600">Date of Birth</label>
<input 
  type="date" 
  className="border p-3 rounded-lg w-full" 
  value={dob} 
  onChange={e => setDob(e.target.value)} 
  required 
/>
    
        <input type="tel" className="border p-3 rounded-lg" placeholder="Contact Number" value={contact} onChange={e=>setContact(e.target.value)} required />
        <input type="email" className="border p-3 rounded-lg" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />

        <textarea className="border p-3 rounded-lg md:col-span-2" placeholder="Full Address" value={address} onChange={e=>setAddress(e.target.value)} required />

        <input className="border p-3 rounded-lg" placeholder="Highest Education" value={education} onChange={e=>setEducation(e.target.value)} required />
        <input className="border p-3 rounded-lg" placeholder="Year of Passing" value={yearOfPassing} onChange={e=>setYearOfPassing(e.target.value)} required />
        <input className="border p-3 rounded-lg" placeholder="Experience (years)" value={experience} onChange={e=>setExperience(e.target.value)} />
        <input className="border p-3 rounded-lg" placeholder="Classes You Can Teach" value={classesTeach} onChange={e=>setClassesTeach(e.target.value)} required />
        <input className="border p-3 rounded-lg" placeholder="Preferred Timing" value={timing} onChange={e=>setTiming(e.target.value)} />

        <select className="border p-3 rounded-lg" value={idProofType} onChange={e=>setIdProofType(e.target.value)} required>
          <option value="">Select ID Proof</option>
          <option value="Aadhar Card">Aadhar Card</option>
          <option value="PAN Card">PAN Card</option>
          <option value="Driving Licence">Driving Licence</option>
        </select>

        <input className="border p-3 rounded-lg" placeholder={idProofType ? `Enter ${idProofType} Number` : "Enter ID Proof Number"} value={idProofNumber} onChange={e=>setIdProofNumber(e.target.value)} required />

        <div className="md:col-span-2 flex gap-2">
          <button type="submit" className="flex-1 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">Submit Application</button>
          <button type="button" onClick={()=>setShowTutorForm(false)} className="flex-1 bg-gray-300 text-gray-800 p-3 rounded-lg hover:bg-gray-400 transition">Cancel</button>
        </div>
      </form>
    </div>
  </section>
)}



      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
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
