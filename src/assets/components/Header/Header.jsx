import Logo from '../../images/logo-bookmark.svg'

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="" />

      <nav>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  )
}
