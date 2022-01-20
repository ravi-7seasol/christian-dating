import { GETPROFILEIMAGE } from '../types';

export const getProfileImage = (value: any) => (dispatch: any) => {
    dispatch({
        type: GETPROFILEIMAGE,
        payload: value,
    });
};