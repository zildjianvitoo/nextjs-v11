export default function NewsList({ data }) {
  return (
    <>
      <h1>List of News Article</h1>
      <ul>
        {data.map((news) => {
          return (
            <li key={news.id} style={{ marginTop: "1rem" }}>
              <h3>
                {news.id} {news.title}
              </h3>
              <p>Category: {news.category}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
