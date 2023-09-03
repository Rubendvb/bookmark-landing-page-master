import IconMenuOpen from '../../images/icon-hamburger.svg'
import IconMenuClose from '../../images/icon-close.svg'

import './Header.scss'
import Logo from '../Logo/Logo'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <input type="checkbox" className="header__nav__check" id="nav__check" />

        <div className="header__nav__img ">
          <Logo />
        </div>

        <label className="header__nav__label" htmlFor="nav__check">
          <img
            className="header__nav__label__img-open"
            src={IconMenuOpen}
            alt=""
          />

          <img
            className="header__nav__label__img-close"
            src={IconMenuClose}
            alt=""
          />
        </label>

        <ul className="header__nav__ul">
          <li className="header__nav__ul__li">
            <a href="#">Features</a>
          </li>
          <li className="header__nav__ul__li">
            <a href="#">Pricing</a>
          </li>
          <li className="header__nav__ul__li">
            <a href="#">Contact</a>
          </li>
          <li className="header__nav__ul__li">
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
