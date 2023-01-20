import { IconesStylesContainer, IconesVariant } from './iconesStyles.styles'

interface IconesStylesProps {
  variant?: IconesVariant
  content?: any
}

export function IconesStyles({
  variant = 'purplePrimary',
  content,
}: IconesStylesProps) {
  return (
    <IconesStylesContainer variant={variant}>{content}</IconesStylesContainer>
  )
}
