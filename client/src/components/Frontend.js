import React from "react";
import "./App.css";

export default function Form() {
  const [formData, setFormData] = React.useState({
    userTrack: "",
    artistForm: "",
    albumForm: "",
    genreForm: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    // event.preventDefault()
    // /index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by Track"
        onChange={handleChange}
        name="userTrack"
        value={formData.userTrack}
      />
      <button>Submit</button>
      <input
        type="text"
        placeholder="Search by Artist Name"
        onChange={handleChange}
        name="artistForm"
        value={formData.artistForm}
      />
      <button>Submit</button>
      <input
        type="text"
        placeholder="Search by Album Name"
        onChange={handleChange}
        name="albumForm"
        value={formData.albumForm}
      />
      <button>Submit</button>
      <input
        type="text"
        placeholder="Search by Genre Name"
        onChange={handleChange}
        name="genreForm"
        value={formData.genreForm}
      />
      <button>Submit</button>
    </form>
  );
}
