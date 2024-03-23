import LogoChrome from '../../images/logo-chrome.svg'
import LogoFirefox from '../../images/logo-firefox.svg'
import LogoOpera from '../../images/logo-opera.svg'
import BgDots from '../../images/bg-dots.svg'

import styles from './DownloadExtension.module.scss'

export default function DownloadExtension() {
  return (
    <section className={styles.downloadExtension}>
      <div>
        <h2 className={styles.title}>Download the extension</h2>
        <p className={styles.text}>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favorite you’d like us to prioritize.
        </p>
      </div>

      <div className={styles.containerBrowser}>
        <article className={styles.card}>
          <img src={LogoChrome} alt="" />
          <h3 className={styles.titleBrowser}>Add to Chrome</h3>
          <span className={styles.span}>Minimum version 62</span>
          <img className={styles.dots} src={BgDots} alt="" />
          <button className={styles.button}>Add & Install Extension</button>
        </article>

        <article className={styles.card}>
          <img src={LogoFirefox} alt="" />
          <h3 className={styles.titleBrowser}>Add to Firefox</h3>
          <span className={styles.span}>Minimum version 55</span>
          <img className={styles.dots} src={BgDots} alt="" />
          <button className={styles.button}>Add & Install Extension</button>
        </article>

        <article className={styles.card}>
          <img src={LogoOpera} alt="" />
          <h3 className={styles.titleBrowser}>Add to Opera</h3>
          <span className={styles.span}>Minimum version 46</span>
          <img className={styles.dots} src={BgDots} alt="" />
          <button className={styles.button}>Add & Install Extension</button>
        </article>
      </div>
    </section>
  )
}
