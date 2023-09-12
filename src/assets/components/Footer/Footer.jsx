import LogoFacebook from '../../images/icon-facebook.svg'
import LogoTwitter from '../../images/icon-twitter.svg'
import Logo from '../Logo/Logo'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMenu}>
        <div className={styles.imgFooter}>
          <Logo />
        </div>

        <ul className={styles.ulFooter}>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className={styles.social}>
          <img src={LogoFacebook} alt="" />
          <img src={LogoTwitter} alt="" />
        </div>
      </div>

      <div className={styles.personal}>
        <p className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://github.com/Rubendvb"
            target="_blank"
            rel="noreferrer"
          >
            Rubén
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
