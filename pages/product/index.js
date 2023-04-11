import Link from "next/link";
import React from "react";

export default function ProductList({ productId = 100 }) {
  return (
    <>
      <h1>
        <Link href="/">Back to Home</Link>
      </h1>
      <h2>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h2>

      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  );
}
