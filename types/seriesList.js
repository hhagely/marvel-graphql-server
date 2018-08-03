import SeriesSummary from './seriesSummary';

const SeriesList = `
type SeriesList {
  available: Int
  returned: Int
  collectionUri: String
  items: [SeriesSummary]
}`;

export default [SeriesList, SeriesSummary];
