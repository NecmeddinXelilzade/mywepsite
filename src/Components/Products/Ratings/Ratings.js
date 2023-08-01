import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { setProductRating } from '../../../redux/actions/products';
import { useDispatch } from 'react-redux';
import styles from './Ratings.module.scss';

const stars = [1, 2, 3, 4, 5];

const Ratings = props => {
    const dispatch = useDispatch();
    const { product } = props;
    const [currentValue, setCurrentValue] = useState(product.rating.rate);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => {
        setCurrentValue(value);
        const newProduct = {
            ...product,
            rating: {
                ...product.rating,
                rate: value,
            },
        };
        dispatch(setProductRating(newProduct));
    };

    const handleMouseOver = value => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    return (
        <div>
            <div className={styles.container}>
                {stars.map((el, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={30}
                            style={{
                                marginRight: 10,
                                cursor: 'pointer',
                            }}
                            className={(hoverValue || currentValue) > index ? styles.active : styles.inactive}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Ratings;
