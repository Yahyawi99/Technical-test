import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobally = () => useContext(AppContext);

export default AppProvider;
