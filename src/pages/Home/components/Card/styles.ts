import { Link } from 'react-router-dom'

import { styled } from 'styled-components'

export const CardContainer = styled(Link)`
  min-width: 100%;
  border-radius: 10px;
  padding: 2rem;
  text-decoration: none;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  background-color: ${(props) => props.theme.colors['base-post']};

  &:hover {
    border-color: ${(props) => props.theme.colors['base-label']};
    transform: scale(1.02);
  }
`

export const HeadCard = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  @media only screen and (max-width: 576px) {
    gap: 0.2rem;
    flex-direction: column;
  }
`

export const Title = styled.h3`
  line-height: 1.6;
  color: ${(props) => props.theme.colors['base-title']};
  font-size: ${(props) => props.theme.sizes['title-md']};
`

export const CreatedAt = styled.span`
  white-space: nowrap;
  padding-top: 8px;
  color: ${(props) => props.theme.colors['base-span']};
  font-size: ${(props) => props.theme.sizes['text-md']};

  &:first-letter {
    text-transform: uppercase;
  }
`

export const Description = styled.span`
  max-height: 102px;
  line-height: 1.6;
  margin-top: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors['base-text']};

  * {
    display: inline;
  }

  a {
    color: inherit;
    text-decoration: none;
    pointer-events: none;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    -webkit-line-clamp: 3;
  }
`
