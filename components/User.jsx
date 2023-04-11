import React from "react";

export default function User({ user }) {
  return (
    <>
      <h3>Nama usernya {user.name}</h3>
      <p>Usernamenya {user.username}</p>
    </>
  );
}
