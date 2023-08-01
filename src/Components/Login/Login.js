import React, {useState} from 'react';
import {loginUser} from "../../redux/actions/user";
import {useDispatch} from "react-redux";
import styles from './Login.module.scss'

const Login = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const onChangeUserName = (e) => {
        const {value} = e.target

        setUserData(prevState => {
            return {
                ...prevState,
                username: value
            }
        })
    }

    const onChangePassword = (e) => {
        const {value} = e.target

        setUserData(prevState => ({...prevState, password: value}))
    }

    const onLoginUser = () => {
        dispatch(loginUser(userData))
    }

    return (
        <div className={styles.container}>
            <div>
                <input type="text" className={styles.tipemood} onChange={onChangeUserName} value={userData.username} placeholder={'username'}/>
            </div>
            <div>
                <input type="text"className={styles.tipemood} onChange={onChangePassword} value={userData.password} placeholder={'password'}/>
            </div>
            <button onClick={onLoginUser}className={styles.tipemood}>login</button>
            <h1>Hello USER</h1>
        </div>
    );
};

export default Login;
