import { useForm } from 'react-hook-form'
import { FromContainer } from './FormEndereco.styles'

type Inputs = {
  cep: number
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

export function FormEndereco() {
  const { register } = useForm<Inputs>()

  return (
    <div>
      <FromContainer>
        <input id="cep" placeholder="CEP" {...register('cep')} />
        <input id="rua" placeholder="Rua" {...register('rua')} />
        <div>
          <input id="numero" placeholder="Número" {...register('numero')} />
          <input
            id="complemento"
            placeholder="Complemento"
            {...register('complemento')}
          />
        </div>
        <div>
          <input id="bairro" placeholder="Bairro" {...register('bairro')} />
          <input id="cidade" placeholder="Cidade" {...register('cidade')} />
          <input id="uf" placeholder="UF" {...register('uf')} />
        </div>
      </FromContainer>
    </div>
  )
}
