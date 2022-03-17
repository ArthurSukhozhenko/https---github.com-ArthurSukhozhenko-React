import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.messages}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Valera" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Anton" },
    { id: 6, name: "Oleh" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "OK" },
    { id: 4, message: "Wheare" },
    { id: 5, message: "Who" },
    { id: 6, message: "I'am" },
  ];

  let dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
