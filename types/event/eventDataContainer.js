import Event from './event';

const EventDataContainer = `
  type EventDataContainer {
    offset: Int,
    limit: Int,
    total: Int,
    count: Int,
    results: [Event]
  }
`;

export default () => [EventDataContainer, Event];
