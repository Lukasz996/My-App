import { EXAMPLE_ACTION } from '../actions/exampleActions';

const initialState = {
  // inicjalny stan
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        // zaktualizowany stan
      };
    default:
      return state;
  }
};

export default exampleReducer;