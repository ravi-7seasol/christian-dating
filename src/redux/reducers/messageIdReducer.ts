import { MESSAGEID } from '../types';

const initialState = {
    message_Id: '',
};

export const messageIdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MESSAGEID:
            return {
                ...state,
                message_Id: action.payload,
            };
        default:
            return state;
    }
};
