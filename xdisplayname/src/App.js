import React, { useState } from "react";

function App() {
  const [formValues, setFormValues] = useState({ fname: "", lname: "" });
  const [fullName, setFullName] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname } = formValues;
    setFullName(`${fname} ${lname}`);
    setIsClicked(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="fname"
            value={formValues.fname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lname"
            value={formValues.lname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isClicked && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
