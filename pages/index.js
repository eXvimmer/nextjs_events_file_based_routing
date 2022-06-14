import { getFeaturedEvents } from "../dummy_data";
import EventList from "../components/Events/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
}

export default HomePage;
