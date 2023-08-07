import React from 'react';
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("home")}</h1>
            <div>{t('products')}</div>
      </div>
    );
};

export default Home;
