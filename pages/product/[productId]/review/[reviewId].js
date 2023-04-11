import { useRouter } from "next/router";
import React from "react";

export default function ReviewId() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <h1>
      Review number {reviewId} for Product {productId}
    </h1>
  );
}
