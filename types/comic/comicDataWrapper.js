import ComicDataContainer from './comicDataContainer';

const ComicDataWrapper = `
  type ComicDataWrapper {
    code: Int,
    status: String,
    copyright: String,
    attributionText: String
    attributionHTML: String
    data: ComicDataContainer
  }
`;

export default () => [ComicDataWrapper, ComicDataContainer];
