import Comic from './comic';

const ComicDataContainer = `
type ComicDataContainer {
  offset: Int,
  limit: Int,
  total: Int,
  count: Int,
  results: [Comic]
}
`;

export default () => [ComicDataContainer, Comic];
