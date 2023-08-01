import Login from "./Components/Login/Login";
import Router from "./Components/router/Router";
import {useSelector} from "react-redux";
import {auth} from "./utils/userAuth";

auth()

function App() {
    const isAuth = useSelector(state => state.user.isAuth);

    return ! isAuth ? <Login/> : <Router />
}

export default App;



