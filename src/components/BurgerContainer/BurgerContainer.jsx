import { Price } from '../Price/Price';
import style from './BurgerContainer.module.css';

export const BurgerContainer = (props) => {
  return (
    <div className={style.box}>
      <div className={style.boxIndgidient}>
        <div className={style.ingridient}>

        </div>
      </div>
      <Price />
    </div>
  )
}
