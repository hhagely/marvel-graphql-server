import CharacterSummary from './characterSummary';

const CharacterList = `
type CharacterList {
  available: Int,
  returned: Int,
  collectionURI: String,
  items: [CharacterSummary]
}
`;

export default [CharacterList, CharacterSummary];
