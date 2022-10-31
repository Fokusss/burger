import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./Ingridient.module.css";

export const Ingridient = (props) => {
  const ingr = props.ing;
  console.log(ingr);
  return (
    <li>
      <div className={style.box}>
        <img src={ingr.image} />
        <div className={style.price}><p className="text text_type_digits-default">{ingr.price}</p><CurrencyIcon type='primary'/></div>
        <h3 className="text text_type_main-small">{ingr.name}</h3>
      </div>
    </li>
  );
};
