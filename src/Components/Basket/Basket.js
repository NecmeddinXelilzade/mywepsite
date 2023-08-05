import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeBasketData} from "../../redux/actions/products";
import styles from './Basket.module.scss'
import ecommerce from '../image/ecommerce.jpg'
import bgimage from '../image/bgimage.jpg'

const Basket = () => {
    const dispatch = useDispatch();
    const basketProducts = useSelector(state => state.products.basketProducts);

    const onDeleteClick = (prd) => {
        dispatch(changeBasketData(prd))
    }

    const summary = useMemo(() => {
        let total = 0;

        for (let i = 0; i < basketProducts.length; i++) {
            total = total + Number(basketProducts[i].price)
        }

        return total;
    }, [basketProducts]);


    return (
        <div  className={styles.container}>
            <div className={styles.back} style={{ backgroundImage: `url(${bgimage})` }}>
                 <div className={styles.contend} style={{ backgroundImage: `url(${ecommerce})` }}> 
                {
                       basketProducts.map(product => (
                         <div className={styles.onecart}  key={product.id}>
                             <img className={styles.img}  src={product.image} alt="" />
                        <div className={styles.data} >
                            <div>{product.title}</div>
                            <div>{product.category}</div>
                            <div  >{product.price}</div>
                            <button className={styles.btn} onClick={() => onDeleteClick(product)}>delete</button>
                        </div>
                    </div>
                ))
                }
                </div>
            </div>
           
            <div className={styles.total} > <h4> Total: {summary.toFixed(2)}</h4></div>
        </div>
    );
};

export default Basket; 