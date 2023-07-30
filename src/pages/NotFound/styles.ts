import { keyframes, styled } from 'styled-components'

export const NotFoundContainer = styled.section`
  text-align: center;
  border-radius: 10px;
  padding: 2rem 2rem 3rem;
  overflow: hidden;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors['base-profile']};
`

const drop = keyframes`
  0% {
    transform: translateY(-200px) scaleY(0.9);
  }
  5% {
    opacity: 0.7;
  }
  50% {
    transform: translateY(0px) scaleY(1);
    opacity: 1;
  }
  65% {
    transform: translateY(-17px) scaleY(0.9);
  }
  75% {
    transform: translateY(-22px) scaleY(0.9);
  }
  100% {
    transform: translateY(0px) scaleY(1);
    opacity: 1;
  }
`

const fallen = keyframes`
  0% {
    transform: rotate(0);
  }
  40% {
    transform: rotate(180deg) translate(10px, -40px);
  }
  60% {
    transform: rotate(150deg) translate(10px, -40px);
  }
  80% {
    transform: rotate(180deg) translate(10px, -40px);
  }
  100% {
    transform: rotate(170deg) translate(10px, -40px);
  }
`

export const Title = styled.h2`
  text-align: center;
  line-height: 1.1;
  margin-bottom: 2rem;

  strong {
    font-size: 5rem;
  }

  span {
    opacity: 0;
    display: inline-block;
    animation: ${drop} 0.4s linear forwards;

    &:nth-child(1) {
      animation-delay: 0.2s;
    }

    &:nth-child(2) {
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
      animation:
        ${drop} 0.4s linear forwards,
        0.8s ${fallen} 1s linear forwards;
    }
  }

  p {
    display: block;
    position: relative;
    z-index: 2;
    text-shadow:
      -1px 1px 0 ${(props) => props.theme.colors['base-profile']},
      1px 1px 0 ${(props) => props.theme.colors['base-profile']},
      1px -1px 0 ${(props) => props.theme.colors['base-profile']},
      -1px -1px 0 ${(props) => props.theme.colors['base-profile']};
  }
`
