import { BurgerIngridients } from '../burger-ingridients/burgerIngridients';
import style from './main.module.css';


export const Main = () => {
  return (
    <main className={style.main}>
      <BurgerIngridients />
    </main>
  )
}
