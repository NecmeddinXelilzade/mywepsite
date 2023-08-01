import axios from "axios";
import {
    BASKET_PRODUCTS_CHANGED,
    CATEGORIES_RECEIVED, NEW_BASKET_DATA,
    PRODUCTS_CHANGED,
    SET_CURRENT_CATEGORY,
    SET_SEARCH_VALUE
} from "../types";

export const getCategories = () => async (dispatch) => {
    const { data } = await axios.get('https://fakestoreapi.com/products/categories');

    const newData = data.map(el => {
        return {
            name: el,
            value: el
        }
    });

    const all = {
        name: 'All',
        value: 'all'
    }

    const newCategories = [...newData, all];

    dispatch(setCategories(newCategories));
}

const setCategories = (payload) => {
    return {
        type: CATEGORIES_RECEIVED,
        payload
    }
}

export const getProductsByCategory = (category) => async (dispatch) => {
    const { data } = category === 'all' ? await axios.get(`https://fakestoreapi.com/products`) : await axios.get(`https://fakestoreapi.com/products/category/${category}`);

    dispatch(setProducts(data));
}

export const setProducts = (payload) => {
    return {
        type: PRODUCTS_CHANGED,
        payload
    }
}

export const changeCategory = (payload) => {
    return {
        type: SET_CURRENT_CATEGORY,
        payload
    }
}

export const changeSearchValue = (payload) => {
    return {
        type: SET_SEARCH_VALUE,
        payload
    }
}

export const setBasket = (payload) => {
    return {
        type: BASKET_PRODUCTS_CHANGED,
        payload
    }
}

export const changeBasketData = (payload) => {
    return {
        type: NEW_BASKET_DATA,
        payload
    }
}

export const setProductRating = (params) => async (dispatch, getState) => {
    const reduxStore = getState();
    const prd = reduxStore.products.products;
    const response = await axios.put(`https://fakestoreapi.com/products/${params.id}`, params);

    if (response) {
        const newProducts = prd.map(el => {
            if (el.id === params.id) {
                return {
                    ...params
                }
            }

            return el

        })
        dispatch(setProducts(newProducts));
    }

}


export const buyProduct = (params) => (dispatch, getState) => {
    const store = getState();
    const {products} = store.products
    const response = 'https://www.azericard.com/';

    if (response) {
        const newData = products.filter(el => el.id !== params.id);
        dispatch(setProducts(newData));
    }

}