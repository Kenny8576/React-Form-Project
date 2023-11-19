import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  // Using an Expresion

//   function handleChange (event) {
//     const {name, value} = event.target;

//     setContact((prevValue) => {
//         if (name === "fName") {
//            return {
//                 fName: value,
//                 lName: prevValue.lName,
//                 email: prevValue.email
//             }
//         } else if (name === "lName") {
//            return {
//                 fName: prevValue.fName,
//                 lName: value,
//                 email: prevValue.email
//             }
//         } else if (name === "email") {
//            return {
//                 fName: prevValue.fName,
//                 lName: prevValue.lName,
//                 email: value
//             }
//         }
//     });
//   }

  // Using spreadOperator

  function handleChange (event) {
    const {name, value} = event.target;
    
    setContact(prevValue => {
        return {
            ...prevValue,
            [name]: value
        };
    });
  }

  function handleClick (event) {
    event.preventDefault();
  } 

  return (
    <div className="container">
      <h1>
        {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleClick}>
        <input name="fName" onChange={handleChange} value={contact.fName} placeholder="First Name" />
        <input name="lName" onChange={handleChange} value={contact.lName} placeholder="Last Name" />
        <input name="email" onChange={handleChange} value={contact.email} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
