import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 12px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.input`
  font-size: 16px;
  flex-grow: 1;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 8px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
`

export const Button = styled.button`
  margin-left: 16px;
  padding: 8px 16px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  cursor: pointer;
`