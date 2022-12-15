import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Titles } from '../../components/Titles/Titles.index'
import { PageContainer } from './carrinho.styles'
import { FormEndereco } from './FormEndereco/FormEndereco.index'

export function Carrinho() {
  return (
    <PageContainer>
      <Titles title="Complete seu pedido" subtitle={true} />
      <div className="simpleContainer">
        <div className="titleContainerEndereco">
          <MapPinLine size={22} className="iconsEndereco" />
          <div>
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
        <FormEndereco />
      </div>
      <div className="metodoPagamentoContainer">
        <div className="titlemetodoPagamentoContainer">
          <CurrencyDollar size={22} className="iconsPagamento" />
          <div>
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
        <div className="cardMetodosPagamento">
          <div>
            <CreditCard size={22} className="iconsPagamento" />
            <span>Cartão de Crédito</span>
          </div>
          <div>
            <Bank size={22} className="iconsPagamento" />
            <span>Cartão de Débito</span>
          </div>
          <div>
            <Money size={22} className="iconsPagamento" />
            <span>Dinheiro</span>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
