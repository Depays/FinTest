import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import * as styles from "./LangMenu.module.css";
import icons from "../../resources/icons";

const LangMenu = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const [langIndex, setLangIndex] = useState(0);

  const langMenu = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChooseLang = (index) => {
    setLangIndex((previousState) => (previousState = index));
  };

  //   Закрытие меню выбора языка при клике вне
  const handleClickOutside = useCallback((event) => {
    if (langMenu.current && !langMenu.current.contains(event.target)) {
      setOpen((previousState) => (previousState = false));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  const languages = [
    {
      title: "Ru",
      icon: icons.langRu,
    },
    {
      title: "En",
      icon: icons.langEn,
    },
    {
      title: "Ch",
      icon: icons.langChina,
    },
  ];
  return (
    <div ref={langMenu} {...props}>
      <div className={styles.dropDown}>
        <div className={styles.choosenLang} onClick={handleOpen}>
          <span>{languages[langIndex].title}</span>
          <img src={languages[langIndex].icon} alt="" />
        </div>
        {open ? (
          <ul className={styles.menu}>
            {languages.map((lang, index) => (
              <li
                className={styles.langItem}
                onClick={() => handleChooseLang(index)}
                key={index}
              >
                <span>{lang.title}</span>
                <img src={lang.icon} alt="" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default LangMenu;
