import React, { useState } from "react";

const EditForm = ({currentData , updatedData}) => {

  console.log("EditForm", currentData , updatedData);
  const [formdata, setFormData] = useState(
    currentData
  );

  const InputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    updatedData(formdata);
    console.log(formdata);
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
