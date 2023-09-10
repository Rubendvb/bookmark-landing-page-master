import styles from './Questions.module.scss'

export default function Questions() {
  return (
    <section className={styles.questions}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <p className={styles.textMain}>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className={styles.bookmark}>
        <div className={styles.containerBookmark}>
          <input className={styles.containerBookmark__check} type="checkbox" />
          <p className={styles.containerBookmark__title}>What is Bookmark?</p>
          <p className={styles.containerBookmark__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>

        <div className={styles.containerBookmark}>
          <input className={styles.containerBookmark__check} type="checkbox" />
          <p className={styles.containerBookmark__title}>
            How can I request a new browser?
          </p>
          <span className={styles.containerBookmark__text}>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </span>
        </div>

        <div className={styles.containerBookmark}>
          <input className={styles.containerBookmark__check} type="checkbox" />
          <p className={styles.containerBookmark__title}>
            Is there a mobile app?
          </p>
          <span className={styles.containerBookmark__text}>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </span>
        </div>

        <div className={styles.containerBookmark}>
          <input className={styles.containerBookmark__check} type="checkbox" />
          <p className={styles.containerBookmark__title}>
            What about other Chromium browsers?
          </p>
          <span className={styles.containerBookmark__text}>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </span>
        </div>
      </div>

      <button className={styles.button}>More Info</button>
    </section>
  )
}
