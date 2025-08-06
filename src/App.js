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

    <h2 className="text-3xl font-bold ext-center text-gray-800 mb-6">Apply as a Tutor</h2>
    
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
          I con
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
