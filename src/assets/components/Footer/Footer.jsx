import Logo from '../../images/logo-bookmark.svg'
import LogoFacebook from '../../images/icon-facebook.svg'
import LogoTwitter from '../../images/icon-twitter.svg'

export default function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <img src={Logo} alt="" />
          </li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>

        <div>
          <img src={LogoFacebook} alt="" />
          <img src={LogoTwitter} alt="" />
        </div>
      </div>

      <div>
        <p className="attribution">
          Challenge by
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
