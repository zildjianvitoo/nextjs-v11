export default function EventList({ events }) {
  return (
    <>
      <h1>EventList</h1>
      <ul>
        {events.map((evt) => {
          return (
            <li key={evt.id} style={{ marginTop: "1rem" }}>
              <h3>
                {evt.id}. {evt.title}
                <span style={{ marginLeft: "1rem" }}>{evt.date}</span>
              </h3>
              <p>category: {evt.category}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/events");
  const data = await res.json();

  return {
    props: {
      events: data,
    },
  };
}
