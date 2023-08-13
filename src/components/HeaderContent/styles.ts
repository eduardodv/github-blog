import { styled } from 'styled-components'

export const HeaderContentContainer = styled.section`
  display: flex;
  gap: 2rem;
  position: relative;
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors['base-profile']};

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    gap: 1.4rem;
  }
`

export const AuthorImage = styled.div`
  width: 9.25rem;
  min-width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors['base-post']};

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 6rem;
    min-width: 6rem;
    height: 6rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div<{ $isHome: boolean }>`
  width: 100%;
  flex: 1;

  @media only screen and (max-width: 576px) {
    text-align: ${(props) => props.$isHome && 'center'};
  }
`

export const Links = styled.div<{ $isHome: boolean }>`
  display: flex;
  margin-bottom: 20px;
  justify-content: ${(props) => (props.$isHome ? 'center' : 'space-between')};

  @media only screen and (min-width: 576px) {
    justify-content: ${(props) =>
      props.$isHome ? 'flex-end' : 'space-between'};
    position: ${(props) => props.$isHome && 'absolute'};
    right: ${(props) => props.$isHome && '2rem'};
    margin-top: ${(props) => props.$isHome && '0.3125rem'};
  }
`

export const Title = styled.div<{ $isHome: boolean }>`
  h1,
  h2 {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    font-size: ${(props) => props.theme.sizes['title-lg']};
    color: ${(props) => props.theme.colors['base-title']};
    padding-right: ${(props) => props.$isHome && '5rem'};

    @media only screen and (max-width: 575px) {
      text-align: ${(props) => props.$isHome && 'center'};
      padding-right: 0;
    }
  }
`

export const Description = styled.div`
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 575px) {
    text-align: center;
  }
`
