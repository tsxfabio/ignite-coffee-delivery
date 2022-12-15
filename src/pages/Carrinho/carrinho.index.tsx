import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Titles } from '../../components/Titles/Titles.index'
import { PageContainer } from './carrinho.styles'
import { FormEndereco } from './FormEndereco/FormEndereco.index'

export function Carrinho() {
  return (
    <PageContainer>
      <Titles title="Complete seu pedido" subtitle={true} />
      <div className="simpleContainer">
        <div className="titleContainerEndereco">
          <MapPinLine size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
        <FormEndereco />
      </div>
      <div className="metodoPagamentoContainer">
        <div className="titlemetodoPagamentoContainer">
          <CurrencyDollar size={22} />
        </div>
      </div>
    </PageContainer>
  )
}
