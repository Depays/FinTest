import { NavLink } from "react-router-dom";

import styles from "./SettingsNav.module.css";

const SettingsNav = () => {
  const settingsLinks = [
    {
      title: "Profile",
      url: "/settings",
    },
    {
      title: "INVEST ACCOUNT",
      url: "/settings/invest-account",
    },
    {
      title: "AGREEMENTS",
      url: "/settings/agreements",
    },
    {
      title: "PAYMENT METHODS",
      url: "/settings/payment-methods",
    },
    {
      title: "SECURITY",
      url: "/settings/security",
    },
  ];
  return (
    <div className={styles.navContent}>
      {settingsLinks.map((item, index) => (
        <NavLink
          to={item.url}
          key={index}
          end
          className={({ isActive }) =>
            isActive ? styles.navItemActive : styles.navItem
          }
        >
          <span>{item.title}</span>
        </NavLink>
      ))}
      {/* <NavLink
        to="/settings"
        end
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        <span>Profile</span>
      </NavLink>
      <NavLink
        to="/settings/invest-account"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        <span>INVEST ACCOUNT</span>
      </NavLink>
      <NavLink
        to="/settings/agreements"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        <span>AGREEMENTS</span>
      </NavLink>
      <NavLink
        to="/settings/payment-methods"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        <span>PAYMENT METHODS</span>
      </NavLink>
      <NavLink
        to="/settings/security"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        <span>SECURITY</span>
      </NavLink> */}
    </div>
  );
};

export default SettingsNav;
