import { BurgerIngridients } from '../burger-ingridients/burgerIngridients';
import { BurgerContainer } from '../BurgerContainer/BurgerContainer';
import style from './main.module.css';


export const Main = (props) => {
  return (
    <main className={style.main}>
      <BurgerIngridients ingridients={props.data}/>
      <BurgerContainer ingridients={props.data}/>
    </main>
  )
}
