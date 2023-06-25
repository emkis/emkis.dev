/**
 * This file only defines the contract of tokens that are static
 * which means they don't change based on theme or any other conditions.
 *
 * This file does not generate any CSS, it only holds the reference
 * for the CSS Variables that will be created when someone implements
 * this contract.
 */

import { createGlobalThemeContract } from '@vanilla-extract/css'
import { fontFamily } from '@tokens/definitions/font-family'
import { fontSize } from '@tokens/definitions/font-size'
import { fontWeight } from '@tokens/definitions/font-weight'
import { letterSpacing } from '@tokens/definitions/letter-spacing'
import { padding } from '@tokens/definitions/padding'
import { radius } from '@tokens/definitions/radius'
import { spacing } from '@tokens/definitions/spacing'
import { size } from '@tokens/definitions/size'

export const baseTokens = createGlobalThemeContract({
  'font-family.body': fontFamily.body.variable,
  'font-family.heading': fontFamily.heading.variable,
  'font-family.monospaced': fontFamily.monospaced.variable,

  'font-size.200': fontSize[200].variable,
  'font-size.225': fontSize[225].variable,
  'font-size.250': fontSize[250].variable,
  'font-size.300': fontSize[300].variable,
  'font-size.375': fontSize[375].variable,
  'font-size.450': fontSize[450].variable,
  'font-size.600': fontSize[600].variable,

  'font-weight.body.regular': fontWeight.regular.variable,
  'font-weight.body.medium': fontWeight.medium.variable,
  'font-weight.heading.regular': fontWeight.regular.variable,
  'font-weight.heading.medium': fontWeight.medium.variable,
  'font-weight.monospaced.regular': fontWeight.regular.variable,

  'letter-spacing.regular': letterSpacing.regular.variable,
  'letter-spacing.dense': letterSpacing.dense.variable,

  'padding.100': padding[100].variable,
  'padding.200': padding[200].variable,
  'padding.300': padding[300].variable,
  'padding.400': padding[400].variable,

  'radius.125': radius[125].variable,
  'radius.200': radius[200].variable,
  'radius.300': radius[300].variable,
  'radius.400': radius[400].variable,
  'radius.full': radius.full.variable,

  'spacing.50': spacing[50].variable,
  'spacing.100': spacing[100].variable,
  'spacing.200': spacing[200].variable,
  'spacing.300': spacing[300].variable,
  'spacing.400': spacing[400].variable,
  'spacing.500': spacing[500].variable,
  'spacing.700': spacing[700].variable,

  'size.300': size[300].variable,
  'size.500': size[500].variable,
  'size.600': size[600].variable,
  'size.700': size[700].variable,
  'size.900': size[900].variable,
})
