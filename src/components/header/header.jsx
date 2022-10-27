import { Logo, BurgerIcon, ListIcon,ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./header.module.css";

function Link (props) {
  return (
    <div className={style.link_box} style={props.style}>
      <props.icon />
      <p style={{marginLeft: 9}} className="text text_type_main-default">{props.text}</p>
    </div>
  )
}


function NavBar (props) {
  return (
    <div className={style.nav_bar}>
      <Link text='Констурктор' icon={BurgerIcon}/>
      <Link text='Лента заказов' icon={ListIcon}/>
    </div>
  )
}

function Content (props) {
  return (
    <div className={style.content}>
      <NavBar />
      <Logo />
      <Link text='Личный кабинет' icon={ProfileIcon} />
    </div>
  )
}


function Header (props) {
  return (
    <div className={style.box}>
      <Content />
    </div>
  )
}

export default Header;
