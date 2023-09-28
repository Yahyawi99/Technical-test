import React from "react";
// css
import "../styles/forms.css";

const Form = () => {
  return (
    <form action="/send" className="form">
      <div className="fisrtName">
        <label htmlFor="firstName">
          <p>First Name</p>
          <p>*</p>
        </label>
        <input name="firstName" type="text" placeholder="Yassin" />
      </div>

      <div className="lastName">
        <label htmlFor="firstName">
          <p>Last Name</p>
          <p>*</p>
        </label>
        <input name="firstName" type="text" placeholder="Yahyawi" />
      </div>

      <div className="email">
        <label htmlFor="email">
          <p>Email</p>
          <p>*</p>
        </label>
        <input
          name="email"
          type="email"
          validate={false}
          placeholder="yassinyahyawi@gmail.com"
        />
      </div>

      <div className="description">
        <label htmlFor="description">
          <p>Description</p>
          <p>*</p>
        </label>
        <textarea name="description" placeholder="About you"></textarea>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
