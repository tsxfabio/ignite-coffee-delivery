import styled from 'styled-components'

export const FromContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  #cep {
    width: 30%;
  }

  #rua {
    width: 100%;
  }

  input {
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-300']};
    border-radius: 4px;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    #numero,
    #bairro {
      width: 30%;
    }

    #complemento {
      width: 70%;
    }

    #cidade {
      width: 55%;
    }

    #uf {
      width: 15%;
    }
  }
`
