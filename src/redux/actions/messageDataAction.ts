import {MESSAGEDATA} from '../types'

export const messageData = (value :any) => (dispatch: any) =>{
    dispatch({
        type:MESSAGEDATA,
        payload:value,
    })

}