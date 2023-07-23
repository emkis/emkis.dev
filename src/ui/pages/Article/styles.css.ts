import { style, globalStyle, createVar, fallbackVar } from '@vanilla-extract/css'
import { slateDark } from '@radix-ui/colors'
import { token, breakpoint } from '@tokens'

export const articleBackground = createVar()
const spacingX = createVar()

export const header = style({
  maxWidth: '1280px',
  margin: '0 auto',
  borderBottomLeftRadius: token('radius.400'),
  borderBottomRightRadius: token('radius.400'),
  background: fallbackVar(articleBackground, slateDark.slate5),
  padding: `76px ${token('padding.300')}`,
})

export const headerContent = style({
  maxWidth: '904px',
  margin: '0 auto',
  width: '100%',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: token('spacing.200'),
})

export const article = style({
  vars: {
    [spacingX]: token('padding.200'),
  },
  margin: '0 auto',
  maxWidth: '904px',
  padding: `${token('spacing.700')} ${spacingX}`,
  '@media': {
    [breakpoint('md')]: {
      vars: {
        [spacingX]: token('padding.300'),
      },
    },
    '(min-width: 928px)': {
      vars: {
        [spacingX]: '0',
      },
    },
  },
})

globalStyle(`${article} > * + *`, {
  marginTop: token('spacing.500'),
})

globalStyle(`${article} :first-child`, {
  marginTop: '0',
})

globalStyle(
  `
  ${article} > h2,
  ${article} > h3,
  ${article} > h4`,
  {
    margin: `${token('spacing.700')} 0 ${token('spacing.300')}`,
  }
)

globalStyle(
  `
  ${article} > h2 + *,
  ${article} > h3 + *,
  ${article} > h4 + *`,
  {
    margin: 0,
  }
)

globalStyle(`${article} [data-rehype-pretty-code-fragment] *`, {
  fontFamily: token('font-family.monospaced'),
})

globalStyle(`${article} code`, {
  fontSize: token('font-size.200'),
  lineHeight: '26px',
})

globalStyle(`${article} [data-rehype-pretty-code-title]`, {
  color: '#ecedee',
  fontSize: token('font-size.200'),
  lineHeight: 0,
  background: '#343746',
  padding: `${token('padding.300')} ${token('padding.200')}`,
  borderWidth: '2px',
  borderColor: '#424559',
  borderStyle: 'solid',
  borderRadius: token('radius.125'),
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
})

globalStyle(`${article} pre`, {
  padding: token('padding.200'),
  borderRadius: token('radius.125'),
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '#424559',
  overflowX: 'auto',
})

globalStyle(`${article} [data-rehype-pretty-code-title] + pre`, {
  borderTop: 0,
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
})

globalStyle(
  `
  ${article} p code,
  ${article} li code`,
  {
    display: 'inline-block',
    color: token('color.text-primary'),
    background: token('color.background-neutral'),
    padding: `0 ${token('padding.100')}`,
    borderRadius: token('radius.125'),
  }
)

globalStyle(
  `
  ${article} ol,
  ${article} ul`,
  {
    marginTop: token('spacing.300'),
    paddingLeft: token('spacing.300'),
  }
)

globalStyle(`${article} ul`, {
  listStyleType: 'disc',
})

globalStyle(`${article} ol`, {
  listStyleType: 'decimal',
})

globalStyle(`${article} li`, {
  padding: '2px 0 2px 6px',
})

globalStyle(`${article} li::marker`, {
  color: token('color.text-primary'),
})

globalStyle(`${article} blockquote p`, {
  color: token('color.text-primary'),
  fontStyle: 'italic',
  paddingLeft: token('spacing.300'),
  borderLeft: '4px hsl(201, 6.2%, 20.5%) solid',
})

globalStyle(`${article} img`, {
  borderRadius: token('radius.200'),
})
