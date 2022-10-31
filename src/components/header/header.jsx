import { Logo, BurgerIcon, ListIcon,ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./header.module.css";

function Content (props) {
  const styleForNavText = "text text_type_main-default" + ' ' + style.text;
  return (
    <div className={style.content}>
      <div className={style.nav}>
      <a href="#" className={style.linkActive}><BurgerIcon/><p className={styleForNavText}>Конструктор</p></a>
      <a href="#" className={style.link}><ListIcon /><p className={styleForNavText}>Лента заказов</p></a>
      </div>
      <Logo />
      <div className={style.nav}>
        <a href="#" className={style.link}><ProfileIcon /><p className={styleForNavText}>Личный кабинет</p></a>
      </div>
    </div>
  )
}


export default function Header (props) {
  return (
    <div className={style.box}>
      <Content />
    </div>
  )
}
