import { USEREXPIRED } from "../types";

const initialState = {
    user_expired: '',
};

export const userExpiredReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USEREXPIRED:
      return {
        ...state,
        user_expired: action.payload,
      };

    default:
      return state;
  }
};
