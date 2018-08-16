import CharacterDataContainer from './characterDataContainer';

const CharacterDataWrapper = `
type CharacterDataWrapper {
  code: Int,
  status: String,
  copyright: String,
  attributionText: String
  attributionHTML: String
  data: CharacterDataContainer
}
`;

export default () => [CharacterDataWrapper, CharacterDataContainer];
