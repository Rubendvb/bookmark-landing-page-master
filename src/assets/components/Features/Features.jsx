import styles from './Features.module.scss'

import ImageFeatures1 from '../../images/illustration-features-tab-1.svg'
// import ImageFeatures2 from '../../images/illustration-features-tab-2.svg'
// import ImageFeatures3 from '../../images/illustration-features-tab-3.svg'

import options from './features.json'

export default function Features() {
  const optionSelect = (option) => {
    console.log(option)
  }

  return (
    <section className={styles.features}>
      <div className={styles.featuresHeader}>
        <h2 className={styles.title}>Features</h2>

        <p className={styles.text}>
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className={styles.menu}>
        {options.map((option) => (
          <div className={styles.item} key={option.id}>
            <p
              className={styles.item__text}
              onClick={() => optionSelect(option)}
            >
              {option.option}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.imgContainer}>
        <div className={styles.imgBg}></div>
        <img className={styles.img} src={ImageFeatures1} alt="" />
      </div>

      <div className={styles.bookmark}>
        <h3 className={styles.title}>Bookmark in one click</h3>
        <p className={styles.text}>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your favorite
          sites.
        </p>

        <button className={styles.button}>More Info</button>
      </div>
    </section>
  )
}
