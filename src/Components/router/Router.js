import React from 'react';
import { Routes, Route, Outlet, Link, BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Basket from '../Basket/Basket';
import Layout from '../layout/Layout';
// import download from '../img/download.jpg'
// import Sidebar from '../BurgerMenu/Sidebar';
import Navbar from '../Navbar/Navbar';
import styles from './Router.module.scss'


const Router = () => {
    return (
        <div className={styles.container}>
            {/* <img src={download}/> */}
                <BrowserRouter>
                   <Routes>
                      <Route path ='' element={<Navbar />} > </Route>
                   </Routes>

                   </BrowserRouter>
                   <BrowserRouter>
                <Routes>
                        <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='products' element={<Products />} />
                        <Route path='basket' element={<Basket />} />
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
