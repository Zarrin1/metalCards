import { CHANGE_IMAGE } from "../actions/image";

const initialData = {
  imageIndex: 0,
};

export const imageReducer = (state = initialData, action) => {
  switch (action.type) {
    case CHANGE_IMAGE:
      return { ...state, imageIndex: action.payload };
    default:
      state;
  }
};
