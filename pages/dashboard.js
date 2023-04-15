import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Dashboard() {
  const { data, isLoading } = useSWR(
    "http://localhost:4000/dashboard",
    fetcher
  );

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "2rem" }}>
      <h1>Dashboard</h1>
      <h3>Jumlah post {data.posts}</h3>
      <h3>Jumlah like {data.likes}</h3>
      <h4>Jumlah followers {data.followers}</h4>
      <h4>Jumlah following {data.following}</h4>
    </div>
  );
}
