import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { IconesStyles } from '../../components/IconesStyles/IconesStyles.index'
import {
  DetalhesDaCompraContainer,
  DetalhesPedidoContainer,
  ImagemPedidoContainer,
} from './DetalhesDaCompra.styles'

export function DetalhesDaCompra() {
  return (
    <DetalhesDaCompraContainer>
      <h3>Uhu! Pedido confirmado</h3>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <div className="rowContainer">
        <DetalhesPedidoContainer>
          <div className="cardDetalhes">
            <IconesStyles content={<MapPin size={18} weight="fill" />} />
          </div>
          <div className="cardDetalhes">
            <IconesStyles
              backgroundVariant="yellowPrimary"
              content={<Timer size={18} weight="fill" />}
            />
          </div>
          <div className="cardDetalhes">
            <IconesStyles
              backgroundVariant="yellowSecondary"
              content={<CurrencyDollar size={18} weight="fill" />}
            />
          </div>
        </DetalhesPedidoContainer>
        <ImagemPedidoContainer>
          <img src="/src/assets/motoboy.svg" />
        </ImagemPedidoContainer>
      </div>
    </DetalhesDaCompraContainer>
  )
}
