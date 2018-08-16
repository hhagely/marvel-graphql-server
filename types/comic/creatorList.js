import CreatorSummary from './creatorSummary';

const CreatorList = `
type CreatorList {
  available: Int,
  returned: Int,
  collectionURI: String
  items: [CreatorSummary]
}
`;

export default [CreatorList, CreatorSummary];
