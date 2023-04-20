import { useState } from "react";
import { useRouter } from "next/router";

export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  async function fetchEvent(category) {
    const res = await fetch(
      `http://localhost:4000/events?category=${category}`
    );
    const data = await res.json();
    setEvents(data);
    router.push(`/events?category=${category}`, undefined, { shallow: true });
  }

  return (
    <>
      <h1>EventList</h1>
      <ul>
        <div style={{ margin: "1rem", display: "flex", gap: "0.5rem" }}>
          <button onClick={() => fetchEvent("sports")}>Sports Events</button>
          <button onClick={() => fetchEvent("food")}>Food Events</button>
          <button onClick={() => fetchEvent("technology")}>
            Technology Events
          </button>
        </div>

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

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const res = await fetch(`http://localhost:4000/events`);
  const data = await res.json();

  return {
    props: {
      eventList: data,
    },
  };
}
