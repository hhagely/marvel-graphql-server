import EventSummary from './eventSummary';

const EventList = `
type EventList {
  available: Int
  returned: Int
  collectionUri: String
  items: [EventSummary]
}`;

export default [EventList, EventSummary];
