import EventDataContainer from './eventDataContainer';

const EventDataWrapper = `
  type EventDataWrapper {
    code: Int,
    status: String,
    copyright: String,
    attributionText: String
    attributionHTML: String
    data: EventDataContainer,
    etag: String
  }
`;

export default () => [EventDataWrapper, EventDataContainer];
