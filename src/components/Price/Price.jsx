import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./Price.module.css";

export const Price = () => {
  return (
    <div className={style.box}>
      <p className="text text_type_digits-medium">610</p>
      <CurrencyIcon type="primary" />
      <Button type="primary" size="medium">
        Нажми на меня
      </Button>
    </div>
  );
};
