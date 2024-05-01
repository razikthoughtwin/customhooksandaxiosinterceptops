import { actiontypes } from "../constant/constant";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  console.log("productreducer", payload);
  switch (type) {
    case actiontypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};