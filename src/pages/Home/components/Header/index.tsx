import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IconesStyles } from '../../../../components/IconesStyles/IconesStyles.index'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="titleAndDescriptionHeader">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <div className="iconAndDescriptionHeader">
          <div className="list1th">
            <div className="listContainer">
              <IconesStyles
                backgroundVariant="yellowSecondary"
                content={<ShoppingCart size={22} weight="fill" />}
              />
              <span>Compra simples e segura</span>
            </div>
            <div className="listContainer">
              <IconesStyles
                backgroundVariant="yellowPrimary"
                content={<Timer size={22} weight="fill" />}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
          </div>
          <div className="list2th">
            <div className="listContainer">
              <IconesStyles
                backgroundVariant="grayPrimary"
                content={<Package size={22} weight="fill" />}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="listContainer">
              <IconesStyles
                backgroundVariant="purplePrimary"
                content={<Coffee size={22} weight="fill" />}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
      </div>
      <div className="navbarImage">
        <img src="/src/assets/imagem-header.png" />
      </div>
    </HeaderContainer>
  )
}
