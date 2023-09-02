import * as React from 'react'
import type { Metadata } from 'next'
import { articleColors } from '@article'
import { ContentContainer } from '@ui/components/ContentContainer'
import { ArticlesGrid } from '@ui/components/ArticlesGrid'
import { Navbar } from '@ui/components/Navbar'
import { Heading } from '@ui/components/Heading'
import { Text } from '@ui/components/Text'
import { ArticleCard } from '@ui/components/ArticleCard'
import * as styles from './styles.css'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'My collection of articles related to the web ecosystem.',
}

export function Articles() {
  const articleTitles = [
    'Moving state outside React',
    'Optimizing Web Performance: Tips and Tricks for Faster Websites',
    'How I like to learn new technologies',
    'The path of building my website on 2023',
    'How to track custom events in a scalable way',
    'Smooth Scrolling Links with Scroll Targets',
    'Mastering CSS Grid Layouts: A Step-by-Step Guide',
    'The Future of Web Development: Trends to Watch in 2023',
    'Creating Stunning Web Animations with CSS and JavaScript',
    "A Developer's Guide to Responsive Typography",
    'Building Scalable React Applications: Best Practices',
    'Harnessing the Power of WebSockets for Real-Time Updates',
    'The Art of Debugging: Tips for Frontend Developers',
    'Designing User-Friendly Forms: Best Practices and Examples',
    'Exploring the World of Progressive Web Apps (PWAs)',
    'Beyond Dark Mode: Customizing User Interface Themes',
    'Effective Strategies for Cross-Browser Compatibility',
  ]

  return (
    <React.Fragment>
      <Navbar />

      <ContentContainer as="main">
        <header className={styles.header}>
          <Heading as="h1" level={1}>
            Articles
          </Heading>
          <Text size="large">
            This is my collection of articles related to the web ecosystem. Here you will find some
            tips, learnings from me and everything else that I think might be valuable to share with
            the world. I hope one of these articles finds you, and when it does, I hope you learn
            something new or at least have fun reading it.
          </Text>
        </header>

        <section>
          <Heading as="h2" level={2} className={styles.articlesTitle}>
            All articles
          </Heading>

          <ArticlesGrid as="ul">
            {articleColors.map((article, articleIndex) => (
              <ArticleCard.Root key={articleIndex} as="li" background={article}>
                <ArticleCard.Title articleSlug="second-post">
                  {articleTitles[articleIndex]}
                </ArticleCard.Title>
                <ArticleCard.Description>24min</ArticleCard.Description>
              </ArticleCard.Root>
            ))}
          </ArticlesGrid>
        </section>
      </ContentContainer>
    </React.Fragment>
  )
}
