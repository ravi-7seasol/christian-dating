import { GETPROFILEIMAGE } from '../types';

const initialState = {
    profileImage: '',
};

export const getProfileImageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GETPROFILEIMAGE:
            return {
                ...state,
                profileImage: action.payload,
            };
        default:
            return state;
    }
};
