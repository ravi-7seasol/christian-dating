import { MESSAGEDATA } from '../types';

const initialState = {
    name:'',
    profile_picture:''
};

export const messageDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MESSAGEDATA:  
        console.log("------------------",action.payload);
                  
            return {
                ...state,
                name: action.payload.name,
                profile_picture: action.payload.profile_picture,
            };
        default:
            return state;
    }
};
