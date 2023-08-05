import React from 'react';
import { Routes, Route, Outlet, Link, BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Basket from '../Basket/Basket';
import Layout from '../layout/Layout';
// import download from '../img/download.jpg'
// import Sidebar from '../BurgerMenu/Sidebar';
import styles from './Router.module.scss'
import Carusel from '../Carusel/Carusel';
import Helps from '../Helps/Helps'
import Accound from '../Accound/Accound'
import Blog from '../Blog/Blog'



const Router = () => {
    return (
        <div className={styles.container}>
                 
                   <BrowserRouter>
                <Routes>
                        <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='products' element={<Products />} />
                        <Route path='basket' element={<Basket />} />
                        <Route path='carusel' element={<Carusel />} />
                        <Route path='helps' element={<Helps />} />
                        <Route path='blog' element={<Blog />} />
                        <Route path='accound' element={<Accound />} />
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;

// export default function App() {
//   return (
//     <div className="App" id="outer-container">
//       <Sidebar pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
//       <div id="page-wrap">
//         <h1>Cool Restaurant</h1>
//         <h2>Check out our offerings in the sidebar!</h2>
//       </div>
//     </div>
//   );
// }
