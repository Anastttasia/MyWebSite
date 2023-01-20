import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css';


const Nav = (props) => {
  return <nav className={s.nav}>

    <div className={s.item}>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        Обо мне
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/dialogs"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        Сертификаты
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/news"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        Hard Skills
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/music"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        Портфолио
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        Контакты
      </NavLink>
    </div>

  </nav>
}

export default Nav;