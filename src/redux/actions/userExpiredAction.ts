import { USEREXPIRED } from '../types';

export const userExpired = (value: any) => (dispatch: any) => {
    dispatch({
        type: USEREXPIRED,
        payload: value,
    });
};