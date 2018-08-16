import ComicSummary from './comicSummary';

const ComicList = `type ComicList {
  available: Int
  returned: Int
  collectionUri: String
  items: [ComicSummary]
}`;

export default [ComicList, ComicSummary];
