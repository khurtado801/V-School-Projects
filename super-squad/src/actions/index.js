// 
export const ADD_CHARACTER = 'ADD_CHARACTER';

// Action creator
export function addCharacterById(id) {
  // Action object
  const action = {
    type: ADD_CHARACTER,
    id
  };
  return action;
}
