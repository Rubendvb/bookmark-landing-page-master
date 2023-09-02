import Hero from '../../images/illustration-hero.svg'

export default function Simple() {
  return (
    <section>
      <div>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <button>Get it on Chrome</button>
        <button>Get it on Firefox</button>
      </div>

      <div>
        <img src={Hero} alt="" />
      </div>
    </section>
  )
}
