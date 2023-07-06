/* eslint-disable @typescript-eslint/ban-types */

import type * as React from 'react'

type AsProp<Component extends React.ElementType> = { as?: Component }

type PropsToOmit<Component extends React.ElementType, Props> = keyof (AsProp<Component> & Props)

type PolymorphicComponentProp<
  Component extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<Component>> &
  Omit<React.ComponentPropsWithoutRef<Component>, PropsToOmit<Component, Props>>

type PolymorphicRef<Component extends React.ElementType> =
  React.ComponentPropsWithRef<Component>['ref']

export type PolymorphicComponentPropWithRef<
  Component extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<Component, Props> & { ref?: PolymorphicRef<Component> }

export type PolymorphicComponentPropWithoutRef<
  Component extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<Component, Props>
