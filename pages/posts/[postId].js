import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

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

  if (!resJson.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: resJson,
    },
  };
}

export async function getStaticPaths() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const resJson = await res.json();

  // const paths = resJson.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
      { params: { postId: "4" } },
    ],
    fallback: true,
  };
}
