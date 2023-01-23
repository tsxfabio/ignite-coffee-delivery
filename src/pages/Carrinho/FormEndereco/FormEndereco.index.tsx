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
  const { register, handleSubmit, watch } = useForm<Inputs>()
  const onSubmit = (data: Inputs) => console.log(data)
  console.log(watch('cep'))

  return (
    <div>
      <FromContainer onSubmit={handleSubmit(onSubmit)}>
        <input
          id="cep"
          placeholder="CEP"
          required
          {...register('cep', { required: true })}
        />
        <input
          id="rua"
          placeholder="Logradouro"
          {...register('rua')}
          required
        />
        <div>
          <input
            id="numero"
            placeholder="Número"
            {...register('numero', { required: true })}
            required
          />
          <input
            id="complemento"
            placeholder="Complemento"
            {...register('complemento')}
          />
        </div>
        <input
          id="numero"
          placeholder="Número"
          {...register('numero', { required: true })}
          required
        />
        <input
          id="complemento"
          placeholder="Complemento"
          {...register('complemento')}
        />
        <div>
          <input
            id="bairro"
            placeholder="Bairro"
            {...register('bairro', { required: true })}
            required
          />
          <input
            id="cidade"
            placeholder="Cidade"
            {...register('cidade', { required: true })}
            required
          />
          <input
            id="uf"
            placeholder="UF"
            {...register('uf', { required: true })}
            required
          />
        </div>
      </FromContainer>
    </div>
  )
}
