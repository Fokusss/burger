import { BurgerIngridients } from '../burger-ingridients/burgerIngridients';
import style from './main.module.css';


export const Main = (props) => {
  return (
    <main className={style.main}>
      <BurgerIngridients ingridients={props.data}/>
    </main>
  )
}
