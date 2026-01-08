import { useState } from "react";
import "./App.css";

function App() {
  /*
    fullName - text - String
    email - email - String
    password - password - String
    age - number - Number
    dob - date - String
    gender - radio - String
    skills - checkbox - Array (HTML, CSS, JS)
    country - select - String
    message - textarea - String
    resume - file - null
    agree - checkbox - Boolean (True or False)
  */

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    skills: [],
    country: "",
    message: "",
    resume: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    console.log(files);
    // console.log(
    //   "name =",
    //   name,
    //   "values =",
    //   value,
    //   "type =",
    //   type,
    //   "checked =",
    //   checked,
    //   "files =",
    //   files
    // );

    if (type === "checkbox" && name === "skills") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        resume: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      age: "",
      dob: "",
      gender: "",
      skills: [],
      country: "",
      message: "",
      resume: null,
      agree: false,
    });
  };

  return (
    <div classNameName=" flex items-center justify-center mt-11">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-slate-800 text-center">
          Complete Registration Form
        </h2>

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            onChange={handleChange}
            name="fullName"
            value={formData.fullName}
            type="text"
            placeholder="Full Name"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            onChange={handleChange}
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email Address"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password & Age */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            value={formData.password}
            placeholder="Password"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            onChange={handleChange}
            name="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Date of Birth */}
        <input
          onChange={handleChange}
          name="dob"
          type="date"
          value={formData.dob}
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Gender */}
        <div>
          <p className="font-semibold text-slate-700 mb-2">Gender</p>
          <div className="flex gap-6">
            {["Male", "Female"].map((g) => {
              return (
                <label key={g} className="flex items-center gap-2">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value={g}
                    className="accent-indigo-600"
                  />
                  {g}
                </label>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="font-semibold text-slate-700 mb-2">Skills</p>
          <div className="flex flex-wrap gap-4">
            {["HTML", "CSS", "JS", "REACT JS", "NEXT JS"].map((skill) => {
              return (
                <label key={skill} className="flex items-center gap-2">
                  <input
                    value={skill}
                    onChange={handleChange}
                    name="skills"
                    type="checkbox"
                    className="accent-indigo-600"
                  />
                  {skill}
                </label>
              );
            })}
          </div>
        </div>

        {/* Country */}
        <select
          onChange={handleChange}
          value={formData.country}
          name="country"
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Country</option>
          <option>Bangladesh</option>
          <option>India</option>
          <option>USA</option>
        </select>

        {/* Message */}
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        ></textarea>

        {/* File Upload */}
        <input
          onChange={handleChange}
          name="resume"
          type="file"
          className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />

        {/* Terms */}
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            onChange={handleChange}
            checked={formData.agree}
            name="agree"
            type="checkbox"
            className="accent-indigo-600"
          />
          I agree to the terms & conditions
        </label>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Submit
          </button>

          <button
            onClick={handleReset}
            type="reset"
            className="w-full border border-slate-300 py-2 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
