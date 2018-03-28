import characters_json from '../data/characters.json';

// createCharacter reducer
export function createCharacter(id) {
  let character = characters_json.find(c => c.id === id);
  return character;
}
