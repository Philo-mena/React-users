import React, { useState } from "react";
import Users from "./components/Users";
import UsersForm from "./components/UsersForm";

function App() {
  const [users, setUsers] = useState([
    { name: "Joe", email: "joe@email.com", gen: 5 },
    { name: "Ama", email: "ama@email.com", gen: 6 },
    { name: "Yu", email: "yu@email.com", gen: 7 },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <UsersForm addUserProp={addUser} />
      <Users usersProp={users} />
    </div>
  );
}

export default App;
