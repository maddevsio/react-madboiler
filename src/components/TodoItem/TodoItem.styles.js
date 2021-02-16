import styled from 'styled-components'

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  transition: all .3s ease;
`

export const Remove = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  transition: all .3s ease;
`

export const Wrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    ${Text}, ${Remove} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`