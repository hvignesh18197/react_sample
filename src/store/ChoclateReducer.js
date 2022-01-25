const intialState = {
  noOfChoclate: 10,
};

const ChoclateReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ChocoIncreament":
      return {
        ...state,
        noOfChoclate: state.noOfChoclate + 1,
      };
    case "ChocoDecreament":
      return {
        ...state,
        noOfChoclate: state.noOfChoclate - 1,
      };
    default:
      return state;
  }
};

export const chocoincreament = () => {
    return {
      type: "ChocoIncreament",
    };
  };
  
  export const chocodecreament = () => {
    return {
      type: "ChocoDecreament",
    };
  };

  export default ChoclateReducer;
