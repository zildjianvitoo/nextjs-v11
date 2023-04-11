export default function Post({ post }) {
  return (
    <>
      <h1>{post.id}</h1>
      <h2>{post.body}</h2>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const resJson = await res.json();

  return {
    props: {
      post: resJson,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
      { params: { postId: "4" } },
      { params: { postId: "5" } },
    ],
    fallback: false,
  };
}
