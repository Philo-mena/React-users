import React, { useState } from "react";

const UsersForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      gen: gen,
    };

    props.addUserProp(newUser);

    setEmail("");
    setName("");
    setGen("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="number"
          value={gen}
          placeholder="Enter gen"
          onChange={(e) => setGen(e.target.value)}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default UsersForm;
