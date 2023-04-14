import React from "react";
import { useRouter } from "next/router";
export default function ProductDetail({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h3>Detail Product {product.id} </h3>
      <h1>{product.title}</h1>
      <h2>Price: {product.price}</h2>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const resJson = await res.json();

  if (!resJson.id) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  return {
    props: {
      product: resJson,
    },
    revalidate: 15,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
