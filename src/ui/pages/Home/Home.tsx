import * as React from 'react'
import { ContentContainer } from '@ui/components/ContentContainer'
import { ArticleCard } from '@ui/components/ArticleCard'
import { Heading } from '@ui/components/Heading'
import { Link } from '@ui/components/Link'
import { Navbar } from '@ui/components/Navbar'
import { Pill } from '@ui/components/Pill'
import profile from '@/public/profile.jpg'
import Image from 'next/image'
import * as styles from './styles.css'

export function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <ContentContainer as="main">
        <header className={styles.greetingContainer}>
          <Image alt="" src={profile} width={160} height={160} className={styles.profileImage} />
          <Heading as="h1" level={3}>
            <span className={styles.greetingHeadline}>
              Hey I&apos;m Nicolas, a frontend engineer.
            </span>
            <span className={styles.greetingSubHeadline}>
              I&apos;m obsessed with developer experience and passionate about creating beautiful
              and intuitive user interfaces.
            </span>
          </Heading>
        </header>

        <section>
          <div className={styles.featured}>
            <Heading as="h2" level={3} className={styles.featuredHeading}>
              Featured articles
            </Heading>
            <Pill as={Link} href="/articles" unstyled>
              View all
            </Pill>
          </div>

          <div className={styles.articles}>
            <ArticleCard.Root as="article" background="#5C3F3F">
              <ArticleCard.Title as="h3" articleSlug="second-post">
                Moving state outside React
              </ArticleCard.Title>
              <ArticleCard.Description>6min</ArticleCard.Description>
            </ArticleCard.Root>

            <ArticleCard.Root as="article" background="#48482D">
              <ArticleCard.Title as="h3" articleSlug="hello-markdown">
                Optimizing Web Performance: Tips and Tricks for Faster Websites
              </ArticleCard.Title>
              <ArticleCard.Description>14min</ArticleCard.Description>
            </ArticleCard.Root>
          </div>
        </section>

        <footer>
          <Heading as="h2" level={3} className={styles.contactInfo}>
            You can find me on <Instagram />, <LinkedIn /> and <Github />. Or if you are more old
            school, <HeresMyEmail />.
          </Heading>
        </footer>
      </ContentContainer>
    </React.Fragment>
  )
}

function HeresMyEmail() {
  return (
    <Link href="mailto:nicolasemkis@gmail.com" target="_blank" rel="noopener noreferrer">
      here&apos;s my email
    </Link>
  )
}

function Github() {
  return (
    <Link href="https://github.com/emkis" target="_blank" rel="noopener noreferrer">
      Github
    </Link>
  )
}

function LinkedIn() {
  return (
    <Link
      href="https://www.linkedin.com/in/nicolas-jardim"
      rel="noopener noreferrer"
      target="_blank"
    >
      LinkedIn
    </Link>
  )
}

function Instagram() {
  return (
    <Link href="https://www.instagram.com/emkisn" target="_blank" rel="noopener noreferrer">
      Instagram
    </Link>
  )
}
