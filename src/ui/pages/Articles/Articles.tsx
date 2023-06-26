import * as React from 'react'
import type { Metadata } from 'next'
import { ContentContainer } from '@ui/components/ContentContainer'
import { ArticlesGrid } from '@ui/components/ArticlesGrid'
import { Navbar } from '@ui/components/Navbar'
import { Heading } from '@ui/components/Heading'
import { Text } from '@ui/components/Text'
import { ArticleCard } from '@ui/components/ArticleCard'
import * as styles from './styles.css'
import {
  tomatoDark,
  crimsonDark,
  plumDark,
  violetDark,
  indigoDark,
  grassDark,
  orangeDark,
  brownDark,
  bronzeDark,
  goldDark,
} from '@radix-ui/colors'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'My collection of articles related to the web ecosystem.',
}

export function Articles() {
  const articleColors = ['#5C3F3F', '#482D40', '#364A49', '#3E4A36', '#2D3148', '#48482D']
  const _articleColors = [
    tomatoDark.tomato5,
    crimsonDark.crimson5,
    plumDark.plum5,
    violetDark.violet5,
    indigoDark.indigo5,
    grassDark.grass5,
    orangeDark.orange5,
    brownDark.brown5,
    bronzeDark.bronze5,
    goldDark.gold5,
  ]

  const articleTitles = [
    'Moving state outside React',
    'Optimizing Web Performance: Tips and Tricks for Faster Websites',
    'How I like to learn new technologies',
    'The path of building my website on 2023',
    'How to track custom events in a scalable way',
    'Smooth Scrolling Links with Scroll Targets',
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
