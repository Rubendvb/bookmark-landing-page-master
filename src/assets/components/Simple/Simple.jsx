import ImageHero from '../../images/illustration-hero.svg'

import style from './Simple.module.scss'

export default function Simple() {
  return (
    <section className={style.simple}>
      <div className={style.simpleMain}>
        <h1 className={style.simpleTitle}>A Simple Bookmark Manager</h1>
        <p className={style.text}>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className={style.containerButton}>
          <button>Get it on Chrome</button>
          <button>Get it on Firefox</button>
        </div>
      </div>

      <div className={style.simpleImageContainer}>
        <div className={style.imgBg}></div>
        <img className={style.img} src={ImageHero} alt="" />
      </div>
    </section>
  )
}
