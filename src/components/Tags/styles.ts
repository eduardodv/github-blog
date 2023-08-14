import { styled } from 'styled-components'

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 0.5rem;

  span {
    font-weight: bold;
    font-size: 0.8rem;
    position: relative;
    color: ${(props) => props.theme.colors['base-input']};
    background: ${(props) => props.theme.colors['base-label']};
    border-radius: 100px;
    padding: 1px 7px;
  }
`
