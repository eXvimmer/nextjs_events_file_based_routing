import { Fragment } from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../dummy_data";
import EventSummary from "../../components/EventDetail/EventSummary";
import EventLogistics from "../../components/EventDetail/EventLogistics";
import EventContent from "../../components/EventDetail/EventContent";
import ErrorAlert from "../../components/UI/ErrorAlert";

function EventDetailPage() {
  const router = useRouter();

  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No events found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
