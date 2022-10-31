import { BurgerNav } from '../burger-nav/burger-nav'
import { Ingridients } from '../ingridients/ingridients'
import style from './burgerIngridients.module.css'

export const BurgerIngridients = (props) => {
  return (
    <div className={style.box}>
      <h1 className={`text text_type_main-large ${style.title}`}>Соберите бургер</h1>
      <BurgerNav />
      <Ingridients ingridients={props.ingridients}/>
    </div>
  )
}
