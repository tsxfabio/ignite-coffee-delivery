import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { Titles } from '../../components/Titles/Titles.index'
import { PageContainer } from './carrinho.styles'
import { FormEndereco } from './FormEndereco/FormEndereco.index'

interface Pagamentos {
  credito: boolean
  debito: boolean
  dinheiro: boolean
}

export function Carrinho() {
  const [isActive, setActive] = useState<Pagamentos>({
    credito: false,
    debito: false,
    dinheiro: false,
  })

  function toggleClass() {
    console.log(isActive)
  }

  return (
    <PageContainer>
      <div className="dadosPedido">
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
            <button
              onClick={toggleClass}
              className={isActive ? 'active' : undefined}
            >
              <CreditCard size={22} className="iconsPagamento" />
              <span>Cartão de Crédito</span>
            </button>
            <button
              onClick={toggleClass}
              className={isActive ? 'active' : undefined}
            >
              <Bank size={22} className="iconsPagamento" />
              <span>Cartão de Débito</span>
            </button>
            <button
              onClick={toggleClass}
              className={isActive ? 'active' : undefined}
            >
              <Money size={22} className="iconsPagamento" />
              <span>Dinheiro</span>
            </button>
          </div>
        </div>
      </div>
      <div className="confirmacaoPedido">
        <Titles title="Cafés selecionados" subtitle={true} />
        <div className="confirmacaoPagamentoContainer">
          <div></div>
          <div className="resumoValor">
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
            <button type="submit">Confirmar Pedido</button>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
