const initialState = {
  alertId: [],
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addItemId":
      return {
        ...state,
        alertId: [...state.alertId, action.payload],
      };
    case "removeItemId":
      const filteredArray = state.alertId.filter(
        (item) => item !== action.payload
      );
      return {
        ...state,
        alertId: filteredArray,
      };
    default:
      return state;
  }
};
