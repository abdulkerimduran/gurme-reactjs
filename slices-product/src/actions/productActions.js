
import { products } from '../data/products.json';
import { FETCH_PRODUCTS } from '../types';

export const fetchProducts = () => (dispatch) => {
    
    dispatch({
        type: FETCH_PRODUCTS,
        payload: products
    }
    );


};