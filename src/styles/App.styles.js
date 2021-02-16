import styled, { keyframes } from 'styled-components'

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const ReactLogo = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;
  right: 20px;
  bottom: 20px;
  background-image: url(../assets/images/react.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${rotate} 2.5s linear infinite;
`