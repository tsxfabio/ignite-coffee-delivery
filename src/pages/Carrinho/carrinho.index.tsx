import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CoffeeCardHorizontal } from '../../components/CoffeeCardHorizontal/CoffeeCardHorizontal.index'
import { Titles } from '../../components/Titles/Titles.index'
import { OrderCoffeeContext } from '../../contexts/CoffeeContext'
import { PageContainer } from './carrinho.styles'

interface Pagamentos {
  credito: boolean
  debito: boolean
  dinheiro: boolean
}

interface Inputs {
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
  const {
    itemOrder,
    totalPrice,
    fretePrice,
    totalOrderPrice,
    setEndereco,
    pagamento,
    setPagamento,
  } = useContext(OrderCoffeeContext)

  const { register, setValue, getValues, resetField, handleSubmit, formState } =
    useForm<Inputs>()

  const navigate = useNavigate()

  function toggleClass(opcao: string) {
    //clearStatusPagamento()
    switch (opcao) {
      case 'credito':
        setPagamento({
          credito: !pagamento.credito,
          debito: false,
          dinheiro: false,
        })
        break
      case 'debito':
        setPagamento({
          credito: false,
          debito: !pagamento.debito,
          dinheiro: false,
        })
        break
      case 'dinheiro':
        setPagamento({
          credito: false,
          debito: false,
          dinheiro: !pagamento.dinheiro,
        })
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setEndereco(data)
    navigate('/detalhes-da-compra')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PageContainer>
        <div className="dadosPedido">
          <Titles
            title="Complete seu pedido"
            subtitle={true}
          />
          <div className="simpleContainer">
            <div className="titleContainerEndereco">
              <MapPinLine
                size={22}
                className="iconsEndereco"
              />
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
              <CurrencyDollar
                size={22}
                className="iconsPagamento"
              />
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
                  setPagamento({
                    credito: true,
                    debito: false,
                    dinheiro: false,
                  })
                  setValue('pagamento', pagamento)
                }}
                className={pagamento.credito ? 'active' : undefined}
                {...register('pagamento', {
                  required: !getValues().pagamento,
                })}
              >
                <CreditCard
                  size={22}
                  className="iconsPagamento"
                />
                <span>Cartão de Crédito</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  toggleClass('debito')
                  resetField('pagamento')
                  setPagamento({
                    credito: false,
                    debito: true,
                    dinheiro: false,
                  })
                  setValue('pagamento', pagamento)
                }}
                className={pagamento.debito ? 'active' : undefined}
                {...register('pagamento', {
                  required: !getValues().pagamento,
                })}
              >
                <Bank
                  size={22}
                  className="iconsPagamento"
                />
                <span>Cartão de Débito</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  toggleClass('dinheiro')
                  resetField('pagamento')
                  setPagamento({
                    credito: false,
                    debito: false,
                    dinheiro: true,
                  })
                  setValue('pagamento', pagamento)
                }}
                className={pagamento.dinheiro ? 'active' : undefined}
                {...register('pagamento', {
                  required: !getValues().pagamento,
                })}
              >
                <Money
                  size={22}
                  className="iconsPagamento"
                />
                <span>Dinheiro</span>
              </button>
            </div>
          </div>
        </div>
        <div className="confirmacaoPedido">
          <Titles
            title="Cafés selecionados"
            subtitle={true}
          />
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
    </form>
  )
}
