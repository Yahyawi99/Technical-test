import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [fileCV, setFileCv] = useState("");
  const [error, setError] = useState({ isError: false, message: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  //   Form Handler
  const sendData = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !description || !fileCV) {
      showError("All fields are required!");
      return;
    }

    if (!isEmailValid(email)) {
      showError("Please provide a valid email!");
      return;
    }

    try {
      const data = { firstName, lastName, email, description };
      const formData = new FormData();

      formData.append("data", JSON.stringify(data));
      formData.append("file", fileCV);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      };

      await fetch("/candidate", options);

      setIsSuccess(true);

      await wait(2000);

      setIsSuccess(false);
    } catch (error) {
      console.log(error);
      showError("Something went wrong, please try again later.");
    }
  };

  //   utils
  const wait = async (time) =>
    new Promise((resolve) => setTimeout(resolve, time));

  const isEmailValid = (email) => {
    const regex = /^[a-z]+\d*@([a-z]+\.)+[a-z]{2,}$/gi;
    return regex.test(email);
  };

  const showError = async (message) => {
    setError({ isError: true, message });

    await wait(2000);

    setError({ ...error, isError: false });
  };

  return (
    <AppContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        description,
        setDescription,
        fileCV,
        setFileCv,
        sendData,
        error,
        isSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobally = () => useContext(AppContext);

export default AppProvider;
