import EventItem from "../EventItem";

function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}

export default EventList;
