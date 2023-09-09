import ImageHero from '../../images/illustration-hero.svg'

import styles from './Simple.module.scss'

export default function Simple() {
  return (
    <section className={styles.simple}>
      <div className={styles.simpleMain}>
        <h1 className={styles.simpleTitle}>A Simple Bookmark Manager</h1>
        <p className={styles.text}>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className={styles.containerButton}>
          <button className={styles.buttonChrome}>Get it on Chrome</button>
          <button className={styles.buttonFirefox}>Get it on Firefox</button>
        </div>
      </div>

      <div className={styles.simpleImageContainer}>
        <div className={styles.imgBg}></div>
        <img className={styles.img} src={ImageHero} alt="" />
      </div>
    </section>
  )
}
