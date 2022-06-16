
import { SORT_DATA } from "./actiontypes";
import { DESCRIPTION_DATA } from "./actiontypes";
import { CART_DATA, DELETE_CART_DATA,INCREASE_QTY,DECREASE_QTY, SET_COUNT, LOGIN} from "./actiontypes";

export const sorted_data= (payload)=>{
    return {
        type:SORT_DATA,
        payload,
    }
  
}
export const description_data = (payload)=>{
    return{
        type:DESCRIPTION_DATA,
        payload
    }
}

export const delete_cart_data = (payload) => {
    return {
        type: DELETE_CART_DATA,
        payload
    }
}
export const increase_qty = (payload) => {
    return {
        type: INCREASE_QTY,
        payload
    }
}
export const decrease_qty = (payload) => {
    return {
        type: DECREASE_QTY,
        payload
    }
}
export const cart_data = (payload) => {
    return {
        type: CART_DATA,
        payload
    }
}
export const setCount = (payload) => {
    return {
        type: SET_COUNT,
        payload
    }
}
export const loginaction = () => {
    return {
        type: LOGIN,
    }
}