import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartLink, CidadeLink, NavContainer } from './styles'

export function Header() {
  return (
    <NavContainer>
      <nav>
        <div className="navbar-logo">
          <img src="/src/assets/logo-delivery-coffee.svg"></img>
        </div>
        <div className="navbar-links">
          <CidadeLink href="#">
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </CidadeLink>
          <CartLink href="#">
            <ShoppingCart size={22} weight="fill" />
          </CartLink>
        </div>
      </nav>
    </NavContainer>
  )
}
