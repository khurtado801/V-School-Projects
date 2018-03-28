// Root for our reduces
import characters_json from '../data/characters.json';

// Characters reducer
function characters(state = characters_json, action) {
  // Switch is actual reducing part
  switch (action.type) {
    default:
      return state;
  }
}

export default characters;
