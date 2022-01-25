const intialState = {
  count: 5
};

const CountReducer = (state = intialState, action) => {
  switch (action.type) {
    case "Increament":
      return {
        ...state,
        count: state.count + 1,
      };
    case "Decreament":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const increament = () => {
  return {
    type: "Increament",
  };
};

export const decreament = () => {
  return {
    type: "Decreament",
  };
};

export default CountReducer;
