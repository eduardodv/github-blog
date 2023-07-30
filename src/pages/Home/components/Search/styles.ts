import { styled } from 'styled-components'

export const SearchContainer = styled.section`
  margin-top: 4.5rem;
`

export const SearchHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  strong {
    font-size: ${(props) => props.theme.sizes['text-xl']};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  span {
    font-size: ${(props) => props.theme.sizes['text-md']};
    color: ${(props) => props.theme.colors['base-span']};
  }
`

export const FormContainer = styled.form``

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  padding: 0 1rem;
  color: ${(props) => props.theme.colors['base-text']};
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-border']};

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }

  &:focus-visible {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors['blue-500']};
  }
`
