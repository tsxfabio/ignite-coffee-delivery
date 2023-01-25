import { defaultTheme } from '../../styles/themes/default'
import styled from 'styled-components'

export type colorIconesVariant = 'white' | 'gray'

export type BackgroundIconesVariant =
  | 'purplePrimary'
  | 'yellowPrimary'
  | 'yellowSecondary'
  | 'grayPrimary'

interface IconesStylesProps {
  backgroundVariant: BackgroundIconesVariant
  colorVariant?: colorIconesVariant
}

const colorIconesVariants = {
  white: defaultTheme['white-100'],
  gray: defaultTheme['gray-500'],
}

const backgroundIconesVariants = {
  purplePrimary: defaultTheme['purple-500'],
  yellowPrimary: defaultTheme['yellow-500'],
  yellowSecondary: defaultTheme['yellow-700'],
  grayPrimary: defaultTheme['gray-600'],
}

export const IconesStylesContainer = styled.div<IconesStylesProps>`
  display: inline-flex;
  box-sizing: content-box;
  block-size: fit-content;
  padding: 0.5rem;
  border-radius: 50%;
  color: ${(props) => colorIconesVariants[props.colorVariant || 'white']};
  background: ${(props) => backgroundIconesVariants[props.backgroundVariant]};
`
