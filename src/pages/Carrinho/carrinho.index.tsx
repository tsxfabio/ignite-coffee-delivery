import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CoffeeCardHorizontal } from '../../components/CoffeeCardHorizontal/CoffeeCardHorizontal.index'
import { Titles } from '../../components/Titles/Titles.index'
import { OrderCoffeeContext } from '../../contexts/CoffeeContext'
import { PageContainer } from './carrinho.styles'
import { FormEndereco } from './FormEndereco/FormEndereco.index'

interface Pagamentos {
  credito: boolean
  debito: boolean
  dinheiro: boolean
}

type Inputs = {
  cep: number
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
  pagamento: Pagamentos
}

export function Carrinho() {
  const { register, setValue, getValues, resetField, handleSubmit } =
    useForm<Inputs>()
  const { itemOrder, totalPrice, fretePrice, totalOrderPrice } =
    useContext(OrderCoffeeContext)
  const [isActive, setActive] = useState<Pagamentos>({
    credito: false,
    debito: false,
    dinheiro: false,
  })

  function toggleClass(opcao: string) {
    //clearStatusPagamento()
    switch (opcao) {
      case 'credito':
        setActive({
          credito: !isActive.credito,
          debito: false,
          dinheiro: false,
        })
        break
      case 'debito':
        setActive({
          credito: false,
          debito: !isActive.debito,
          dinheiro: false,
        })
        break
      case 'dinheiro':
        setActive({
          credito: false,
          debito: false,
          dinheiro: !isActive.dinheiro,
        })
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <PageContainer>
      <div className="dadosPedido">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Titles title="Complete seu pedido" subtitle={true} />
          <div className="simpleContainer">
            <div className="titleContainerEndereco">
              <MapPinLine size={22} className="iconsEndereco" />
              <div>
                <span>Endereço de Entrega</span>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>

            <div className="inputColum">
              <input
                id="cep"
                placeholder="CEP"
                type="number"
                required
                {...register('cep', { required: true })}
              />
              <input
                id="rua"
                placeholder="Logradouro"
                type="text"
                {...register('rua')}
                required
              />
            </div>
            <div className="inputRow">
              <input
                id="numero"
                placeholder="Número"
                type="number"
                {...register('numero', { required: true })}
                required
              />
              <input
                id="complemento"
                placeholder="Complemento"
                type="text"
                {...register('complemento')}
              />
            </div>
            <div className="inputRow">
              <input
                id="bairro"
                placeholder="Bairro"
                type="text"
                {...register('bairro', { required: true })}
                required
              />
              <input
                id="cidade"
                placeholder="Cidade"
                type="text"
                {...register('cidade', { required: true })}
                required
              />
              <input
                id="uf"
                placeholder="UF"
                type="text"
                {...register('uf', { required: true })}
                required
              />
            </div>
          </div>
          <div className="metodoPagamentoContainer">
            <div className="titlemetodoPagamentoContainer">
              <CurrencyDollar size={22} className="iconsPagamento" />
              <div>
                <span>Pagamento</span>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>

            <div className="cardMetodosPagamento">
              <button
                type="button"
                onClick={() => {
                  toggleClass('credito')
                  resetField('pagamento')
                  setValue('pagamento.credito', true)
                  console.log(getValues().pagamento)
                }}
                className={isActive.credito ? 'active' : undefined}
                {...register('pagamento.credito', {
                  required: !getValues().pagamento,
                })}
              >
                <CreditCard size={22} className="iconsPagamento" />
                <span>Cartão de Crédito</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  toggleClass('debito')
                  resetField('pagamento')
                  setValue('pagamento.debito', true)
                  console.log(getValues().pagamento)
                }}
                className={isActive.debito ? 'active' : undefined}
                {...register('pagamento.debito', {
                  required: !getValues().pagamento,
                })}
              >
                <Bank size={22} className="iconsPagamento" />
                <span>Cartão de Débito</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  toggleClass('dinheiro')
                  resetField('pagamento')
                  setValue('pagamento.dinheiro', true)
                  console.log(getValues().pagamento)
                }}
                className={isActive.dinheiro ? 'active' : undefined}
                {...register('pagamento.dinheiro', {
                  required: !getValues().pagamento,
                })}
              >
                <Money size={22} className="iconsPagamento" />
                <span>Dinheiro</span>
              </button>
              <button type="submit"></button>
            </div>
          </div>
        </form>
      </div>
      <div className="confirmacaoPedido">
        <Titles title="Cafés selecionados" subtitle={true} />
        <div className="confirmacaoPagamentoContainer">
          {itemOrder.map((item) => {
            return (
              <CoffeeCardHorizontal
                key={item.name}
                img={item.imagem}
                name={item.name}
                valor={item.price}
                quantidade={item.quantidade}
              />
            )
          })}
          <div className="resumoValor">
            <div>
              <span>Total de itens</span>
              <span>
                {totalPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
            <div>
              <span>Frete</span>
              <span>
                {fretePrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>
                {totalOrderPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
            <button type="submit">Confirmar Pedido</button>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
