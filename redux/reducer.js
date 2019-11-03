const recipes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE': {
      const { recipe } = action;
      return [
        ...state,
        recipe,
      ];
    }
    default:
      return state;
  }
};

export default recipes;
