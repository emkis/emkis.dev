import { Heading } from '../ui-core/components/heading/heading'
import { Text } from '../ui-core/components/text/text'
import styles from './page.module.css'

function IndexPage() {
  return (
    <main className={`${styles.page}`}>
      <section>
        <Heading level="1">Nicolas Jardim</Heading>
        <Text color="secondary" asChild={true}>
          <h2>Frontend engineer based in Lisbon</h2>
        </Text>
      </section>

      <section>
        <Heading level="4" asChild={true}>
          <h2>About me</h2>
        </Heading>
        <Text asChild={true}>
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
        </Text>
      </section>

      <section>
        <Heading level="4" asChild={true}>
          <h2>Latest writing</h2>
        </Heading>
        <ol className={styles.articles}>
          <li className={styles.article}>
            <span
              className={styles.articleColor}
              aria-hidden={true}
              style={{ backgroundColor: '#8A9A8A' }}
            />
            <Text>How I help you build better websites</Text>
          </li>
          <li className={styles.article}>
            <span
              className={styles.articleColor}
              aria-hidden={true}
              style={{ backgroundColor: '#7BAAC9' }}
            />
            <Text>Moving state outside React</Text>
          </li>
          <li className={styles.article}>
            <span
              className={styles.articleColor}
              aria-hidden={true}
              style={{ backgroundColor: '#D2B48C' }}
            />
            <Text>Planning for change with RFCs</Text>
          </li>
        </ol>
      </section>

      <section>
        <Heading level="4" asChild={true}>
          <h2>Things I believe</h2>
        </Heading>
        <ol className={styles.beliefs}>
          <li className={styles.belief}>
            <blockquote>
              <Text>The magic is in the details</Text>
            </blockquote>
          </li>
          <li className={styles.belief}>
            <blockquote>
              <Text>
                Small improvements add up over time to massive results
              </Text>
            </blockquote>
          </li>
          <li className={styles.belief}>
            <blockquote>
              <Text>
                The fastest way to keep moving fast is to never slow down
              </Text>
            </blockquote>
          </li>
          <li className={styles.belief}>
            <blockquote>
              <Text>Make things great today not tomorrow</Text>
            </blockquote>
          </li>
          <li className={styles.belief}>
            <blockquote>
              <Text>
                Quality is contagious, don't tolerate{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Broken_windows_theory"
                  target="_blank"
                  rel="noopener"
                >
                  broken windows
                </a>
              </Text>
            </blockquote>
          </li>
          <li className={styles.belief}>
            <blockquote>
              <Text>Small teams ship faster</Text>
            </blockquote>
          </li>
        </ol>
      </section>

      <footer>
        <Heading level="4" asChild={true}>
          <h2>Want to reach out?</h2>
        </Heading>
        <Text>
          Connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/nicolas-jardim"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          ,{' '}
          <a href="https://github.com/emkis" target="_blank" rel="noopener">
            Github
          </a>{' '}
          or just send me an email at{' '}
          <a href="mailto:nicolasemkis@gmail.com">nicolasemkis@gmail.com</a>.
        </Text>
      </footer>
    </main>
  )
}

export default IndexPage
