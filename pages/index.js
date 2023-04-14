import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function HomePage() {
  const [buttonText, setButtonText] = useState("Place order");

  const router = useRouter();
  const handleClick = () => {
    setButtonText("Order succesfully");
    setTimeout(() => {
      router.push("  /product");
    }, 2000);
  };

  return (
    <>
      <h1>HomePage Next Js Pre rendering</h1>
      <h3>
        <Link href="/products">Go to products page</Link>
      </h3>
      <h3>
        <Link href="/users">Go to UserList Page</Link>
      </h3>
      <h3 style={{ marginTop: "2rem" }}>
        <Link href="/posts">Go to list of posts page</Link>
      </h3>
      <button onClick={handleClick}>{buttonText}</button>
    </>
  );
}
