import { Subtitle, TitlePrincipal } from './Titles.styles'

interface TitleModel {
  title: string
  subtitle?: boolean | undefined
}

export function Titles(props: TitleModel) {
  if (props.subtitle) {
    return (
      <div className="titleContainer">
        <Subtitle>{props.title}</Subtitle>
      </div>
    )
  } else {
    return (
      <div className="titleContainer">
        <TitlePrincipal>{props.title}</TitlePrincipal>
      </div>
    )
  }
}
