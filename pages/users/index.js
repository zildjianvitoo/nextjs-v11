import React from "react";
import User from "/components/User.jsx";

export default function UserList({ data }) {
  return (
    <>
      <h1>List of users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id} style={{ marginTop: "1rem" }}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
