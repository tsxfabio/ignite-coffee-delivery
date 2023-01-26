import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { IconesStyles } from '../../components/IconesStyles/IconesStyles.index'
import { UseFormRegister } from 'react-hook-form'
import {
  DetalhesDaCompraContainer,
  DetalhesPedidoContainer,
  ImagemPedidoContainer,
} from './DetalhesDaCompra.styles'
import { useContext } from 'react'
import { OrderCoffeeContext } from '../../contexts/CoffeeContext'

export function DetalhesDaCompra() {
  const { endereco } = useContext(OrderCoffeeContext)

  return (
    <DetalhesDaCompraContainer>
      <h3>Uhu! Pedido confirmado</h3>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <div className="rowContainer">
        <DetalhesPedidoContainer>
          <div className="cardDetalhes">
            <div className="cardDetalhesIcon">
              <IconesStyles
                content={
                  <MapPin
                    size={18}
                    weight="fill"
                  />
                }
              />
            </div>
            <div className="cardDetalhesText">
              <span>
                Entrega em {''}
                <strong>
                  {endereco?.rua}, {endereco?.numero}
                </strong>
              </span>
              <span>
                {endereco?.bairro} - {endereco?.cidade}, {endereco?.uf}
              </span>
            </div>
          </div>
          <div className="cardDetalhes">
            <div className="cardDetalhesIcon">
              <IconesStyles
                backgroundVariant="yellowPrimary"
                content={
                  <Timer
                    size={18}
                    weight="fill"
                  />
                }
              />
            </div>
            <div className="cardDetalhesText">
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </div>
          <div className="cardDetalhes">
            <div className="cardDetalhesIcon">
              <IconesStyles
                backgroundVariant="yellowSecondary"
                content={
                  <CurrencyDollar
                    size={18}
                    weight="fill"
                  />
                }
              />
            </div>
            <div className="cardDetalhesText">
              <span>Pagamento na Entrega</span>
              <span></span>
            </div>
          </div>
        </DetalhesPedidoContainer>
        <ImagemPedidoContainer>
          <img src="/src/assets/motoboy.svg" />
        </ImagemPedidoContainer>
      </div>
    </DetalhesDaCompraContainer>
  )
}
