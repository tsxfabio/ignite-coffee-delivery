import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { OrderCoffeeContext } from '../../contexts/CoffeeContext'
import { CartLink, CidadeLink, NavContainer } from './Header.styles'

export function Header() {
  const { quantidadeTotal } = useContext(OrderCoffeeContext)

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
              {quantidadeTotal > 0 ? <span>{quantidadeTotal}</span> : null}
            </CartLink>
          </NavLink>
        </div>
      </nav>
    </NavContainer>
  )
}
