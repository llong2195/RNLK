import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../Reducers/Index'
const store =  createStore(ShopApp,applyMiddleware(thunkMiddleware));
export default store;
