import styles from './Stay.module.scss'

export default function Stay() {
  return (
    <section className={styles.stay}>
      <p className={styles.paragraph}>35,000+ already joined</p>
      <h2 className={styles.title}>Stay up-to-date with what we’re doing</h2>

      <div className={styles.containerInput}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email address"
        />

        <button className={styles.button}>Contact Us</button>
      </div>
    </section>
  )
}
