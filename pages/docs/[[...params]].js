import { useRouter } from "next/router";
import React from "react";

export default function DocsHomePage() {
  const router = useRouter();
  const { params = [] } = router.query;


  console.log(params);
  if (params.length === 2) {
    return (
      <h1>
        You are viewing feature {params[0]} and example {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>You are viewing feature {params[0]}</h1>;
  }

  return <h1>Docs HomePage</h1>;
}
