const LAST_MOVIES = 'boilerplate/Home/LAST_MOVIES';

// The initial state of the App
const initialState = {
  username: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LAST_MOVIES:
      // Delete prefixed '@' from the github username
      return { ...state, username: action.name.replace(/@/gi, '') };
    default:
      return state;
  }
}

export default homeReducer;
