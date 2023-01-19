import {
  DetalhesDaCompraContainer,
  DetalhesPedidoContainer,
  IconeDetalhesCard,
} from './DetalhesDaCompra.styles'

export function DetalhesDaCompra() {
  return (
    <DetalhesDaCompraContainer>
      <h3>Uhu! Pedido confirmado</h3>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <div>
        <DetalhesPedidoContainer>
          <div className="cardDetalhes">
            <IconeDetalhesCard>aaaa</IconeDetalhesCard>
          </div>
        </DetalhesPedidoContainer>
      </div>
    </DetalhesDaCompraContainer>
  )
}
