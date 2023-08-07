import React, {useEffect, useMemo} from 'react';
import Filters from './Filters/Filters';
import {useDispatch, useSelector} from 'react-redux';
import {buyProduct, getProductsByCategory, setBasket, setProducts} from '../../redux/actions/products';
import Ratings from './Ratings/Ratings';
import styles from './Products.module.scss'
import {HeartOutlined} from "@ant-design/icons";
import bgimage from '../image/bgimage.jpg'
import img from '../image/img.jpg'
import { useTranslation } from "react-i18next";

const Products = () => {
    const dispatch = useDispatch();
    const {products, currentCategory, searchValue, basketProducts} = useSelector(state => state.products);

    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getProductsByCategory(currentCategory));
    }, [currentCategory]);

    useEffect(() => {
        return () => {
            dispatch(setProducts([]));
        };
    }, []);

    const searchedProducts = useMemo(() => {
        return products.filter(product =>
            searchValue === '' ? product : product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [searchValue, products]);

    const onProductClick = prd => {
        const isInBasket = basketProducts.find(product => product.id === prd.id);
        if (!basketProducts.length || !isInBasket) {
            dispatch(setBasket(prd));
        }

    };

    const onBuyProduct = prd => {
        dispatch(buyProduct(prd));
    };


    return (
        <div >
            <Filters/>
            <div className={styles.back} style={{ backgroundImage: `url(${bgimage})` }}>
                        <div className={styles.contend} style={{ backgroundImage: `url(${img})` }} >
                   {searchedProducts.map(product => (
                                  <div className={styles.onecart} key={product.id}>
                        <HeartOutlined size={30}
                                       className={styles.like}  onClick={() => onProductClick(product)}/>
                        <img className={styles.img} src={product.image} alt=''/>
                        <div className={styles.data}>
                            <div onClick={() => onBuyProduct(product)}>{product.title}</div>
                            <div>{product.category}</div>
                            <div>{product.price}</div>
                            <div className={styles.raiting}>
                               <Ratings product={product}/> 
                            </div>
                            <div>
            {/* <h1>{t("home")}</h1>
            <div>{t('products')}</div>
            <div>{t('jeweler')}</div> */}
            
      </div>
                            
                        </div>
                                   </div>

   
                ))}
            </div>
            </div>
    
        </div>
    );
};

export default Products;
