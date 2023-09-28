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
        <input name="firstName" type="text" />
      </div>

      <div className="lastName">
        <label htmlFor="firstName">
          <p>Last Name</p>
          <p>*</p>
        </label>
        <input name="firstName" type="text" />
      </div>

      <div className="email">
        <label htmlFor="email">
          <p>Email</p>
          <p>*</p>
        </label>
        <input name="email" type="email" validate={false} />
      </div>

      <div className="description">
        <label htmlFor="description">
          <p>Description</p>
          <p>*</p>
        </label>
        <textarea name="description"></textarea>
      </div>
    </form>
  );
};

export default Form;
