import { useRef, useState } from 'react'

import classNames from 'classnames'

import IconErro from '../../images/icon-error.svg'

import styles from './Stay.module.scss'

export default function Stay() {
  const [erroActivated, setErroActivated] = useState(false)
  const [email, setEmail] = useState('')
  const emailInputRef = useRef(null)

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErroActivated(null)

    if (isValidEmail(email)) {
      alert('E-mail enviado')

      setEmail('')
    } else {
      setErroActivated(true)

      if (emailInputRef.current) {
        emailInputRef.current.focus()
      }
    }
  }
  return (
    <section className={styles.stay}>
      <div>
        <p className={styles.paragraph}>35,000+ already joined</p>
        <h2 className={styles.title}>Stay up-to-date with what we’re doing</h2>

        <form className={styles.containerInput} onSubmit={handleSubmit}>
          <div
            className={classNames({
              [styles['bgInput']]: erroActivated === true,
            })}
          >
            <div className={styles.containerInput}>
              <input
                className={styles.input}
                ref={emailInputRef}
                type="email"
                value={email}
                name={email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />

              <img
                style={{ display: erroActivated ? 'inline-block' : 'none' }}
                className={styles.erro}
                src={IconErro}
                alt=""
              />
            </div>

            <span
              style={{ display: erroActivated ? 'inline-block' : 'none' }}
              className={styles.message}
            >
              Whoops, make sure it{"'"}s an email
            </span>
          </div>

          <button className={styles.button} type="submit">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  )
}
