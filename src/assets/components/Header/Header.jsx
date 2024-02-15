import { useEffect, useState } from 'react'

import IconMenuOpen from '../../images/icon-hamburger.svg'
import IconMenuClose from '../../images/icon-close.svg'
import IconFacebook from '../../images/icon-facebook.svg'
import IconTwitter from '../../images/icon-twitter.svg'
import Logo from '../Logo/Logo'

import styles from './Header.module.scss'

export default function Header() {
  const [menuChecked, setMenuChecked] = useState(false)

  useEffect(() => {
    function handleMenuToggle(e) {
      setMenuChecked(e.target.checked)
    }

    const menuToggle = document.getElementById('nav__check')

    menuToggle?.addEventListener('change', handleMenuToggle)

    return () => {
      menuToggle?.removeEventListener('change', handleMenuToggle)
    }
  }, [])

  useEffect(() => {
    const body = document.body

    if (menuChecked) {
      body.classList.add('disable-scroll')
    } else {
      body.classList.remove('disable-scroll')
    }
  }, [menuChecked])

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <input
          type="checkbox"
          className={styles.header__nav__check}
          id="nav__check"
        />

        <div className={styles.header__nav__img}>
          <Logo />
        </div>

        <label className={styles.header__nav__label} htmlFor="nav__check">
          <img
            className={styles.header__nav__label__img__open}
            src={IconMenuOpen}
            alt=""
          />

          <img
            className={styles.header__nav__label__img__close}
            src={IconMenuClose}
            alt=""
          />
        </label>

        <ul className={styles.header__nav__ul}>
          <div className={styles.containerLi}>
            <li className={styles.header__nav__ul__li}>
              <a href="#">Features</a>
            </li>
            <li className={styles.header__nav__ul__li}>
              <a href="#">Pricing</a>
            </li>
            <li className={styles.header__nav__ul__li}>
              <a href="#">Contact</a>
            </li>
            <li
              className={`${styles.header__nav__ul__li} ${styles.li__button}`}
            >
              <button>Login</button>
            </li>
          </div>

          <div className={styles.containerIcons}>
            <li>
              <img src={IconFacebook} alt="" />
            </li>
            <li>
              <img src={IconTwitter} alt="" />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
