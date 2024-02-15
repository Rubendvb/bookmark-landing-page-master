import IconFacebook from './IconFacebook/IconFacebook'
import Logo from '../Logo/Logo'
import IconTwitter from './IconTwitter/IconTwitter'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMenu}>
        <div>
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
        </div>

        <div className={styles.social}>
          <IconFacebook />
          <IconTwitter />
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
