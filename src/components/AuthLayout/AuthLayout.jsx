import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import LangMenu from "../LangMenu/LangMenu";

import styles from "./AuthLayout.module.css";
import icons from "../../resources/icons";

const AuthLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link className={styles.logo}>
          <img src={icons.loginLogo} alt="Logo" />
        </Link>
        <LangMenu className={styles.language} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
