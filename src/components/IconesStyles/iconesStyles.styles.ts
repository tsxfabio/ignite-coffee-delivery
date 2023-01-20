import { defaultTheme } from '../../styles/themes/default'
import styled from 'styled-components'

export type IconesVariant =
  | 'purplePrimary'
  | 'yellowPrimary'
  | 'yellowSecondary'

interface IconesStylesProps {
  variant: IconesVariant
}

const iconesVariants = {
  purplePrimary: defaultTheme['purple-500'],
  yellowPrimary: defaultTheme['yellow-500'],
  yellowSecondary: defaultTheme['yellow-700'],
}

export const IconesStylesContainer = styled.div<IconesStylesProps>`
  display: inline-flex;
  padding: 0.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme['white-100']};
  background: ${(props) => iconesVariants[props.variant]};
`
