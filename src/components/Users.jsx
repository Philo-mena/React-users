import React from "react";

const Users = (props) => {
  console.log(props.usersProp);
  return (
    <div>
      {props.usersProp.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <h5>{user.gen}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
