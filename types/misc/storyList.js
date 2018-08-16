import StorySummary from './storySummary';

const StoryList = `
type StoryList {
  available: Int
  returned: Int
  collectionUri: String
  items: [StorySummary]
}
`;

export default [StoryList, StorySummary];
