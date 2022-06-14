import { getAllEvents } from "../../dummy_data";
import EventList from "../../components/Events/EventList";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
