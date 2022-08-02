export const addItemId = (id) => {
  return {
    type: "addItemId",
    payload: id,
  };
};

export const removeItemId = (id) => {
  return {
    type: "removeItemId",
    payload: id,
  };
};
