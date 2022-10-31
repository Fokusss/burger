import React from "react";
import style from "./ingridients.module.css";
import { sortIngridients } from "./ingrigients.js";
import { Ingridient } from "../Ingridient/Ingridient";


export const Ingridients = (props) => {
  const sortIngridient = sortIngridients(props.ingridients);
  console.log(sortIngridient.bun)
  return (
  <div className={style.box}>
    <h2 className={`text text_type_main-medium ${style.title}`}>Булки</h2>
    <ul className={style.list}>
      {(sortIngridient.bun).map((item) => <Ingridient ing={item}/>)}
    </ul>
    <h2 className={`text text_type_main-medium ${style.title}`}>Соуса</h2>
    <ul className={style.list}>
      {(sortIngridient.sauce).map((item) => <Ingridient ing={item}/>)}
    </ul>
    <h2 className={`text text_type_main-medium ${style.title}`}>Начинка</h2>
    <ul className={style.list}>
      {(sortIngridient.main).map((item) => <Ingridient ing={item}/>)}
    </ul>
  </div>)
};
