import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 36px;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.text};
`
