import Link from "next/link";
import React from "react";

export default function Posts({ posts }) {
  return (
    <div>
      <h1>LIST OF POSTS</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginTop: "2rem" }}>
            <Link href={`/posts/${post.id}`} passHref>
              <h3>Judul: {post.title}</h3>
            </Link>
            <p>Desc:{post.body}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resJson = await res.json();

  return {
    props: {
      posts: resJson.slice(0, 5),
    },
  };
}
