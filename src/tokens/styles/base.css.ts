/**
 * This file creates the base tokens for the application.
 *
 * When this file is imported, all the CSS Variables for the tokens below
 * are generated and injected on the target selector.
 */

import { createGlobalTheme } from '@vanilla-extract/css'
import { baseTokens } from './contracts/base.css'
import { fontFamily } from '@tokens/definitions/font-family'
import { fontSize } from '@tokens/definitions/font-size'
import { fontWeight } from '@tokens/definitions/font-weight'
import { letterSpacing } from '@tokens/definitions/letter-spacing'
import { padding } from '@tokens/definitions/padding'
import { radius } from '@tokens/definitions/radius'
import { spacing } from '@tokens/definitions/spacing'
import { size } from '@tokens/definitions/size'

createGlobalTheme(':root', baseTokens, {
  'font-family.body': fontFamily.body.value,
  'font-family.heading': fontFamily.heading.value,
  'font-family.monospaced': fontFamily.monospaced.value,

  'font-size.200': fontSize[200].value,
  'font-size.225': fontSize[225].value,
  'font-size.250': fontSize[250].value,
  'font-size.300': fontSize[300].value,
  'font-size.375': fontSize[375].value,
  'font-size.450': fontSize[450].value,
  'font-size.600': fontSize[600].value,

  'font-weight.body.regular': fontWeight.regular.value,
  'font-weight.body.medium': fontWeight.medium.value,
  'font-weight.heading.regular': fontWeight.regular.value,
  'font-weight.heading.medium': fontWeight.medium.value,
  'font-weight.monospaced.regular': fontWeight.regular.value,

  'letter-spacing.regular': letterSpacing.regular.value,
  'letter-spacing.dense': letterSpacing.dense.value,

  'padding.100': padding[100].value,
  'padding.200': padding[200].value,
  'padding.300': padding[300].value,
  'padding.400': padding[400].value,

  'radius.125': radius[125].value,
  'radius.200': radius[200].value,
  'radius.300': radius[300].value,
  'radius.400': radius[400].value,
  'radius.full': radius.full.value,

  'spacing.50': spacing[50].value,
  'spacing.100': spacing[100].value,
  'spacing.200': spacing[200].value,
  'spacing.300': spacing[300].value,
  'spacing.400': spacing[400].value,
  'spacing.500': spacing[500].value,
  'spacing.700': spacing[700].value,

  'size.300': size[300].value,
  'size.500': size[500].value,
  'size.600': size[600].value,
  'size.700': size[700].value,
  'size.900': size[900].value,
})
