import React from "react";
import { useGlobally } from "../context";
// css
import "../styles/forms.css";

const Form = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    description,
    setDescription,
    sendData,
    error,
    isSuccess,
  } = useGlobally();

  return (
    <form
      className="form"
      onSubmit={(e) => sendData(e)}
      noValidate="novalidate"
    >
      {error.isError && <p className="errMsg">{error.message}</p>}
      {isSuccess && <p className="successMsg">Thank you.</p>}

      <div className="fisrtName">
        <label htmlFor="firstName">
          <p>First Name</p>
          <p>*</p>
        </label>
        <input
          name="firstName"
          type="text"
          placeholder="Yassin"
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
      </div>

      <div className="lastName">
        <label htmlFor="firstName">
          <p>Last Name</p>
          <p>*</p>
        </label>
        <input
          name="firstName"
          type="text"
          placeholder="Yahyawi"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
      </div>

      <div className="email">
        <label htmlFor="email">
          <p>Email</p>
          <p>*</p>
        </label>
        <input
          name="email"
          type="email"
          placeholder="yassinyahyawi@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>

      <div className="description">
        <label htmlFor="description">
          <p>Description</p>
          <p>*</p>
        </label>
        <textarea
          name="description"
          placeholder="About you"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        ></textarea>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
