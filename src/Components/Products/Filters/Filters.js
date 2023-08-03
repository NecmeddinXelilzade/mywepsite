import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCategory, changeSearchValue, getCategories} from "../../../redux/actions/products";
import  styles from  './Filters.module.scss'

const Filters = () => {
    const dispatch = useDispatch();
    const {categories, currentCategory} = useSelector(state => state.products);

    const [placeholder, setPlaceholder] = useState('')

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    const onCategoryChange = (e) => {
        const {value} = e.target;
        dispatch(changeCategory(value))
    }

    const onChangeSearch = (e) => {
        const {value} = e.target;
        dispatch(changeSearchValue(value))
    }

    return (
        <div className={styles.navbar}>
            <select className={styles.select} onChange={onCategoryChange} value={currentCategory}>
                {
                    categories.map(el => <option key={el.value} value={el.value}>{el.name}</option>)
                }
            </select>
            <input className={styles.input} type="text" placeholder={placeholder} onChange={onChangeSearch}/>
        </div>
    );
};

export default Filters;
