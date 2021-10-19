import { combineReducers } from 'redux';
import {GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART} from  '../Action/Index';

const initProduct = {
    numberCart:0,
    Carts:[],
    _products:[]
}

function todoProduct(state = initProduct,actions) {
    switch (actions.type) {
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if(state.numberCart == 0){
                let cart = {
                    qty:1,
                    name:actions.payload.name,
                    thumbnail:actions.payload.thumbnail,
                    price:actions.payload.price,
                }
                state.Carts.push(cart);
            }
            else {
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.name == actions.payload.name){
                        state.Carts[key].qty++;
                        check = true;
                    }
                });
                if(!check){
                    let _cart = {
                        qty:1,
                        name:actions.payload.name,
                        thumbnail:actions.payload.thumbnail,
                        price:actions.payload.price,
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1,
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[actions.payload].qty++;
            return{
                ...state
            }
        
        case DECREASE_QUANTITY:
            let qty = state.Carts[actions.payload].qty;
            if(qty>1)
            {
                state.numberCart--;
                state.Carts[actions.payload].qty--;
            }
            return{
                ...state,
            }
        case DELETE_CART:
            let qty_ = state.Carts[actions.payload].qty;
            return{
                ...state,
                numberCart:state.numberCart - qty_,
                Carts:state.Carts.filter(item=>{
                    return item.name!=state.Carts[actions.payload].name
                })
            }
        default: 
            return state;
    }
}

const ShopApp = combineReducers({
    _todoProduct:todoProduct
});
export default ShopApp;
