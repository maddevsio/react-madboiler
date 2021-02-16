import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 170px;
`

export const Title = styled.h2`
  font-size: 36px;
  margin: 16px 0;
`

export const Description = styled.p``

export const Link = styled.a`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.primary};
  font-weight: bold;
  margin: 0 5px;
  display: inline;
`