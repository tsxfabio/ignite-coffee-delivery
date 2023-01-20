import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { IconesStyles } from '../../components/IconesStyles/IconesStyles.index'
import {
  DetalhesDaCompraContainer,
  DetalhesPedidoContainer,
} from './DetalhesDaCompra.styles'

export function DetalhesDaCompra() {
  return (
    <DetalhesDaCompraContainer>
      <h3>Uhu! Pedido confirmado</h3>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <div>
        <DetalhesPedidoContainer>
          <div className="cardDetalhes">
            <IconesStyles content={<MapPin size={16} weight="fill" />} />
          </div>
          <div className="cardDetalhes">
            <IconesStyles
              variant="yellowPrimary"
              content={<Timer size={16} weight="fill" />}
            />
          </div>
          <div className="cardDetalhes">
            <IconesStyles
              variant="yellowSecondary"
              content={<CurrencyDollar size={16} weight="fill" />}
            />
          </div>
        </DetalhesPedidoContainer>
      </div>
    </DetalhesDaCompraContainer>
  )
}
