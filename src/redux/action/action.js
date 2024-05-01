import { actiontypes } from "../constant/constant";


export const setproducts=(data)=>{
    return{
        type:actiontypes.SET_PRODUCTS,
        payload:data
    }
}