import { useState } from "react";
import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

import LangMenu from "../LangMenu/LangMenu";

import icons from "../../resources/icons";
import * as styles from "./MainLayout.module.css";
import "./MainLayout.module.css";

export default function MainLayout() {
  const [title, setTitle] = useState("");
  const navLinkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5a623", // Основной оранжевый цвет
    color: "#00263d", // Темный текст
    textDecoration: "none",
    width: "300px", // Ширина кнопки
    height: "60px", // Высота кнопки
    // padding: "0 20px", // Отступы слева и справа
    borderRadius: "8px", // Полностью скругленные края
    fontSize: "18px", // Размер текста
    fontWeight: "400", // Жирность текста
    position: "relative", // Для позиционирования полосы
    overflow: "hidden", // Чтобы индикатор не выходил за края

    maxWidth: "247px",
    maxHeight: "42px",
    marginBottom: "10px",
  };
  const lightStripeStyle = {
    position: "absolute",
    right: "0", // Полоса находится справа
    top: "10px",
    bottom: "0",
    width: "4px", // Ширина полосы
    maxHeight: "24px",
    backgroundColor: "#ffe08a", // Светло-желтый цвет
    borderRadius: "30px 0px 0px 30px", // Закругление только с правой стороны
  };
  return (
    <div className={styles.container}>
      <aside className={styles.navBar}>
        <Link to={"/"}>
          <img className={styles.logo} src={icons.mainLogo} alt="Logo" />
        </Link>
        <nav className={styles.navContent}>
          <NavLink to="/" style={navLinkStyle}>
            <span>Dashboard</span>
            <div style={lightStripeStyle}></div>
          </NavLink>
          <NavLink to="#" style={navLinkStyle}>
            <span>Portfolio</span>
            <div className={styles.navItemEndLine}></div>
          </NavLink>
          <NavLink style={navLinkStyle} to="#">
            <span>Agent account</span>
            <div style={lightStripeStyle}></div>
          </NavLink>
          <NavLink style={navLinkStyle} to="#">
            <span>Setting</span>
            <div style={lightStripeStyle}></div>
          </NavLink>
        </nav>
      </aside>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h2 className={styles.title}>Тест</h2>
          <LangMenu />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
