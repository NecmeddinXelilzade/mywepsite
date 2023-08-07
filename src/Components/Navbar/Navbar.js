import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const handleChangeInput = (e) => {
    const isChecked = e.target.checked;
    setIsDark(isChecked);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.route}>
          <Link to="/help">Helps</Link>
        </div>

        <div className={styles.route}>
          <Link to="/blog">Blog-page</Link>
        </div>

        <div className={styles.route}>
          <Link to="/Contakt">Contakt</Link>
        </div>
      </div>
      <div className={styles.right}>
        <label className={styles.switch}>
          <input type="checkbox" onChange={handleChangeInput} value={isDark} />
          <div className={styles.slider}></div>
        </label>

        <div className={styles.route}>
          <Link to="/accaund">
            {" "}
            <UserOutlined />
            Accaund
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
