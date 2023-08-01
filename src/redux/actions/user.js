import axios from "axios";
import {USER_AUTH_CHANGED} from "../types";

export const loginUser = (params) => async (dispatch) => {
   const {data} = await axios.post('https://fakestoreapi.com/auth/login', params);

   if (data) {
       localStorage.setItem('token', data.token);

       dispatch(authUser(true));
   }
}

export const authUser = (payload) => {
    return {
        type: USER_AUTH_CHANGED,
        payload
    }
}
