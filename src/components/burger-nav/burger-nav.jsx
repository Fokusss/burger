import style from './burger-nav.module.css';

export const BurgerNav = () => {
  return (
    <nav className={style.nav}>
      <a className={`${style.link} ${style.link_active}`} href='#'><p className="text text_type_main-small">Булки</p></a>
      <a className={style.link} href='#'><p className="text text_type_main-small">Начинки</p></a>
      <a className={style.link} href='#'><p className="text text_type_main-small">Соусы</p></a>
    </nav>
  )
}
