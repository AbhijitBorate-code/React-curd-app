import React, { useState } from "react";

const EditForm = ({handleUpdate}) => {

  console.log("EditForm", handleUpdate)
  const [formdata, setFormData] = useState({
    company: "",
    contact: "",
    country: "",
  });

  const InputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formdata)
  };

  return (
    <div className="">
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="company"
        value={formdata.company}
        placeholder="contact Name"
        onChange={InputHandler}
      />
      <input
        type="text"
        name="contact"
        value={formdata.contact}
        placeholder="contact Detail"
        onChange={InputHandler}
      />

      <input
        type="text"
        name="country"
        value={formdata.country}
        placeholder="company Name"
        onChange={InputHandler}
      />
      <button type="submit">Update</button>
    </form>
    </div>
  );
};

export default EditForm;
