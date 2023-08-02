import React from 'react';
import {Link, Outlet} from "react-router-dom"; 
import styles from './Navbar.module.scss'
import {UserOutlined} from "@ant-design/icons";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.route} >
                   <Link to='/help'>Helps</Link>
                </div>

                 <div className={styles.route}>
                   <Link to='/blog'>Blog-page</Link>
                 </div>
            
                  <div className={styles.route}>
                   <Link to='/Contakt'>Contakt</Link>
                 </div>
            </div>
           
           <div className={styles.right}>
                  <div className={styles.route}>
                      <Link  to='/accaund'> <UserOutlined />Accaund</Link>
                 </div>
                 </div>
           </div>
    );
}

export default Navbar;
