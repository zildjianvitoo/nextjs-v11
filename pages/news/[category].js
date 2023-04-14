import React from "react";

export default function ArticleListOfCategory({ articles, category }) {
  return (
    <div>
      <h1>
        Showing articles of <em>{category}</em>
      </h1>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.id} style={{ marginTop: "1rem" }}>
              <h3>
                {article.id} {article.title}
              </h3>
              <p>{article.description}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  res.setHeader("Set-Cookie", ["name=Vito"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      articles: data,
      category,
    },
  };
}
