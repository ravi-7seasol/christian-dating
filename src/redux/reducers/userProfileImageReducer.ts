import { USERPROFILEIMAGE } from '../types';

const initialState = {
    profileImage: '',
};

export const userProfileImageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USERPROFILEIMAGE:
            return {
                ...state,
                profileImage: action.payload,
            };
        default:
            return state;
    }
};
