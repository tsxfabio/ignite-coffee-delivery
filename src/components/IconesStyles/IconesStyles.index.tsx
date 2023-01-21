import {
  IconesStylesContainer,
  BackgroundIconesVariant,
  colorIconesVariant,
} from './iconesStyles.styles'

interface IconesStylesProps {
  colorVariant?: colorIconesVariant
  backgroundVariant?: BackgroundIconesVariant
  content?: any
}

export function IconesStyles({
  backgroundVariant = 'purplePrimary',
  content,
}: IconesStylesProps) {
  return (
    <IconesStylesContainer backgroundVariant={backgroundVariant}>
      {content}
    </IconesStylesContainer>
  )
}
