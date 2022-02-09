import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1"> Dimych </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2"> Valera </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3"> Ivan </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4"> Sveta </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5"> Anton </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6"> Oleh </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Yo</div>
        <div className={s.message}>Ok</div>
      </div>
    </div>
  );
};

export default Dialogs;
