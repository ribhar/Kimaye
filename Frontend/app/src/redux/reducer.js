import { CARTDATA, DESDATA, FILTER, GETDATA, SETPRICE,SETCOUNT } from "./action";

const inits = {
  productsData: [],
  desData : {},
  cartdata : [],
  totalprice: 0,
  count: 0
};

export const reducer = (state = inits, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GETDATA: {
      return { ...state, productsData: action.payload };
    }
    case DESDATA : {
      return {
        ...state,
        desData : action.payload
      }
    }
    case FILTER :{
      return{
        ...state,
        productsData:action.payload,
    }
    }
    case CARTDATA: {
      
      return {
        ...state,
        cartdata : action.payload,
        
      }
    }
    case SETCOUNT: {
      return {
        ...state,
        count: action.payload

      }
    }
    case SETPRICE: {
      return {
        ...state,
        totalprice: action.payload.reduce((acc, el) => {
          return acc + (el.qty * el.price)
        }, 0),
      }
      }
    default: {
      return state;
    }
  }
};
