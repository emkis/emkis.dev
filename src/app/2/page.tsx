import { NavBar } from '../Navbar'
import styles from './page.module.css'
import '../globals.css'
import '../reset.css'

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className={`${styles.page}`}>
        <section>
          <h1 className={cn(styles.heading, styles.heading1)}>
            Nicolas Jardim
          </h1>
          <h2 className={cn(styles.heading, styles.heading5, styles.subtitle)}>
            Frontend engineer based in Lisbon
          </h2>
        </section>

        <section>
          <h2 className={cn(styles.heading, styles.heading4)}>About me</h2>
          <p>
            I have a strong background on building Web applications, internal
            tooling and design systems that enable teams to move faster and
            deliver consistent experiences. Recently, I've been focusing on
            Mobile engineering, a space I'm excited about because of the
            opportunity to build applications that people carry with them
            everywhere. I believe the difference between good and great is in
            the details. To me, software should feel like an experience, not
            just a tool. Which is why I care deeply about creating products that
            leave a positive impact on the people who use them.
          </p>
        </section>

        <section>
          <h2 className={cn(styles.heading, styles.heading4)}>
            Latest writing
          </h2>
          <ol className={styles.articles}>
            <li className={styles.article}>
              <span
                className={styles.articleColor}
                aria-hidden={true}
                style={{ backgroundColor: '#8A9A8A' }}
              />
              <p>How I help you build better websites</p>
            </li>
            <li className={styles.article}>
              <span
                className={styles.articleColor}
                aria-hidden={true}
                style={{ backgroundColor: '#7BAAC9' }}
              />
              <p>Moving state outside React</p>
            </li>
            <li className={styles.article}>
              <span
                className={styles.articleColor}
                aria-hidden={true}
                style={{ backgroundColor: '#D2B48C' }}
              />
              <p>Planning for change with RFCs</p>
            </li>
          </ol>
        </section>

        <section>
          <h2 className={cn(styles.heading, styles.heading4)}>
            Things I believe
          </h2>
          <ol className={styles.beliefs}>
            <li className={styles.belief}>
              <blockquote>
                <p>The magic is in the details</p>
              </blockquote>
            </li>
            <li className={styles.belief}>
              <blockquote>
                <p>Small improvements add up over time to massive results</p>
              </blockquote>
            </li>
            <li className={styles.belief}>
              <blockquote>
                <p>The fastest way to keep moving fast is to never slow down</p>
              </blockquote>
            </li>
            <li className={styles.belief}>
              <blockquote>
                <p>Make things great today not tomorrow</p>
              </blockquote>
            </li>
            <li className={styles.belief}>
              <blockquote>
                <p>
                  Quality is contagious, don't tolerate{' '}
                  <a href="#">broken windows</a>
                </p>
              </blockquote>
            </li>
            <li className={styles.belief}>
              <blockquote>
                <p>Small teams ship faster</p>
              </blockquote>
            </li>
          </ol>
        </section>

        <footer>
          <h2 className={cn(styles.heading, styles.heading4)}>
            Want to reach out?
          </h2>
          <p>
            Connect with me on <a href="#">LinkedIn</a>, <a href="#">Github</a>{' '}
            or just send me an email at{' '}
            <a href="mailto:nicolasemkis@gmail.com">nicolasemkis@gmail.com</a>
          </p>
        </footer>
      </main>
    </div>
  )
}
