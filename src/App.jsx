import DownloadExtension from './assets/components/DownloadExtension/DownloadExtension'
import Features from './assets/components/Features/Features'
import Header from './assets/components/Header/Header'
import Questions from './assets/components/Questions/Questions'
import Simple from './assets/components/Simple/Simple'

function App() {
  return (
    <>
      <Header />

      <Simple />

      <Features />

      <DownloadExtension />

      <Questions />

      <footer>
        <p className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  )
}

export default App
