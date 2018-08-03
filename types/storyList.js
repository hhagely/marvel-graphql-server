import StorySummary from './storySummary';

const StoryList = `
type StoryList {
  available: Int
  returned: int
  collectionUri: String
  items: [StorySummary]
}
`;

export default [StoryList, StorySummary];
