import LogoChrome from '../../images/logo-chrome.svg'
import LogoFirefox from '../../images/logo-firefox.svg'
import LogoOpera from '../../images/logo-opera.svg'
import BgDots from '../../images/bg-dots.svg'

export default function DownloadExtension() {
  return (
    <section>
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favorite you’d like us to prioritize.
      </p>
      <div>
        <article>
          <img src={LogoChrome} alt="" />
          <h3>Add to Chrome</h3>
          <span>Minimum version 62</span>
          <img src={BgDots} alt="" />
          <button>Add & Install Extension</button>
        </article>

        <article>
          <img src={LogoFirefox} alt="" />
          <h3>Add to Firefox</h3>
          <span>Minimum version 55</span>
          <img src={BgDots} alt="" />
          <button>Add & Install Extension</button>
        </article>

        <article>
          <img src={LogoOpera} alt="" />
          <h3>Add to Opera</h3>
          <span>Minimum version 46</span>
          <img src={BgDots} alt="" />
          <button>Add & Install Extension</button>
        </article>
      </div>
    </section>
  )
}
