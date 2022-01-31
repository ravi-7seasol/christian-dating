import { USERPROFILEIMAGE } from '../types';

export const userProfileImage = (value: any) => (dispatch: any) => {
    dispatch({
        type: USERPROFILEIMAGE,
        payload: value,
    });
};