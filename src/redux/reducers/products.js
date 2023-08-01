import {
    BASKET_PRODUCTS_CHANGED,
    CATEGORIES_RECEIVED, NEW_BASKET_DATA,
    PRODUCTS_CHANGED,
    SET_CURRENT_CATEGORY,
    SET_SEARCH_VALUE
} from "../types";

const initialState = {
    categories: [],
    products: [],
    currentCategory: 'all',
    searchValue: '',
    basketProducts: [],
};

const products = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case CATEGORIES_RECEIVED: {
            return {
                ...state,
                categories: payload
            }
        }
        case PRODUCTS_CHANGED: {
            return {
                ...state,
                products: payload
            }
        }
        case SET_CURRENT_CATEGORY: {
            return {
                ...state,
                currentCategory: payload
            }
        }
        case SET_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: payload
            }
        }
        case BASKET_PRODUCTS_CHANGED: {
            return {
                ...state,
                basketProducts: [...state.basketProducts, payload]
            }
        }
        case NEW_BASKET_DATA: {
            return {
                ...state,
                basketProducts: state.basketProducts.filter(product => product.id !== payload.id)
            }
        }
        default:
            return state;
    }
};

export default products;
