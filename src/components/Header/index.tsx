import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartLink, CidadeLink, NavContainer } from './styles'

export function Header() {
  return (
    <NavContainer>
      <nav>
        <NavLink to="/">
          <div className="navbar-logo">
            <img src="/src/assets/logo-delivery-coffee.svg"></img>
          </div>
        </NavLink>
        <div className="navbar-links">
          <CidadeLink>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </CidadeLink>

          <NavLink to="/carrinho">
            <CartLink>
              <ShoppingCart size={22} weight="fill" />
            </CartLink>
          </NavLink>
        </div>
      </nav>
    </NavContainer>
  )
}
