import {MESSAGEID} from '../types'

export const messageId = (value :any) => (dispatch: any) =>{
    dispatch({
        type:MESSAGEID,
        payload:value,
    })

}