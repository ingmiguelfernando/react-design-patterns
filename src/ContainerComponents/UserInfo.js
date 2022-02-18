import React from "react";

export const UserInfo = ({ users }) => {
  return users ? (
    users.map((user) => (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <hr />
      </div>
    ))
  ) : (
    <p>Loading...</p>
  );
};
