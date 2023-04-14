import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <>
      List Of Products
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`products/${product.id}`} passHref>
                <h1>
                  {product.id} {product.title} {product.price}
                </h1>
                <hr />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/products");
  const resJson = await res.json();

  return {
    props: {
      products: resJson,
    },
    revalidate: 10,
  };
}
