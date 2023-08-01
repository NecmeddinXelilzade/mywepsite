import {authUser} from "../redux/actions/user";
import {store} from "../redux/store";

export const auth = () => {
    const hasToken = localStorage.getItem('token');

    if (hasToken) {
        store.dispatch(authUser(true));
    }
}
