import { useState } from 'react'
import classNames from 'classnames'

import options from './features.json'

import styles from './Features.module.scss'

export default function Features() {
  const [selectOption, setSelectOption] = useState(1)
  const [selectTitle, setSelectTitle] = useState(options[0].title)
  const [selectContent, setSelectContent] = useState(options[0].content)
  const [selectImage, setSelectImage] = useState(options[0].image)

  const optionSelect = (option) => {
    setSelectOption(option.id)

    setSelectTitle(option.title)

    setSelectContent(option.content)

    setSelectImage(option.image)
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

      <div className={styles.containerContent}>
        <div className={styles.imgContainer}>
          <div className={styles.imgBg}></div>
          <img className={styles.img} src={selectImage} alt="" />
        </div>
        <div className={styles.bookmark}>
          <h3 className={styles.bookmark__title}>{selectTitle}</h3>
          <p className={styles.bookmark__text}>{selectContent}</p>
          <button className={styles.button}>More Info</button>
        </div>
      </div>
    </section>
  )
}
