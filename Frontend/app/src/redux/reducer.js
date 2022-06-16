
import { DESCRIPTION_DATA, SORT_DATA, CART_DATA, DELETE_CART_DATA,INCREASE_QTY,DECREASE_QTY, SET_COUNT, LOGIN} from "./actiontypes";

const initState = {
   
    cartdata: [],
    count: 0,
    login: false,
}

export const dataReducer = (state = initState, { type, payload }) => {
     switch (type) {
         case SORT_DATA: {
             return {
                 ...state,
                 sortedData: [...payload]

             }
         }
          case DESCRIPTION_DATA : {
              return {
                  ...state,
                  discriptionData:payload
              }
         }
         case CART_DATA:{
             return {
                 ...state,
                 cartdata: payload,
                 count: payload.length
             }
        }
         case DELETE_CART_DATA: {
             return {
                 ...state,
                 cartdata: state.cartdata.filter((item) => item.id !== payload),
                 count: state.count-1
             }
         }
         
         case INCREASE_QTY: {
             return {
                 ...state,
                 cartData:[ ...state.cartdata.map((item) => {
                     if (item.id == payload) {
                         item.qty+=1
                     }
                 })]
             }
         }
         case DECREASE_QTY: {
             return {
                 ...state,
                 cartData:[ ...state.cartdata.map((item) => {
                     if (item.id == payload) {
                         item.qty--
                     }
                 })]
             }
         }
         case SET_COUNT: {
             return {
                 ...state,
                 count: payload
             }
         }
         case LOGIN: {
             return {
                 ...state,
                 login: !state.login
             }
         }
         
         default :{
             return state
         }
     }
}