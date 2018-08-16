import Character from './character';

const CharacterDataContainer = `
type CharacterDataContainer {
  offset: Int,
  limit: Int,
  total: Int,
  count: Int,
  results: [Character]
}
`;

export default () => [CharacterDataContainer, Character];
