import { useState } from 'react'
import classNames from 'classnames'

import ImageFeatures1 from '../../images/illustration-features-tab-1.svg'
// import ImageFeatures2 from '../../images/illustration-features-tab-2.svg'
// import ImageFeatures3 from '../../images/illustration-features-tab-3.svg'

import options from './features.json'

import styles from './Features.module.scss'

export default function Features() {
  const [selectOption, setSelectOption] = useState(1)
  const [selectTitle, setSelectTitle] = useState(options[0].title)
  const [selectContent, setselectContent] = useState(options[0].content)

  const optionSelect = (option) => {
    setSelectOption(option.id)

    setSelectTitle(option.title)

    setselectContent(option.content)
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
              className={classNames({
                [styles.item__text]: true,
                [styles['item__text--activated']]: option.id === selectOption,
              })}
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
        <h3 className={styles.title}>{selectTitle}</h3>
        <p className={styles.text}>{selectContent}</p>

        <button className={styles.button}>More Info</button>
      </div>
    </section>
  )
}
