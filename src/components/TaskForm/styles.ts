import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 0.5rem;

  margin-top: -25px;
`

export const Input = styled.input`
  flex: 1;

  color: var(--gray-300);
  background: var(--gray-500);

  border: 1px solid var(--gray-700);
  border-radius: 8px;

  padding: 1rem;

  outline: none;
`

export const Button = styled.button`
  padding: 1rem;

  color: var(--gray-100);
  background: var(--blue-dark);

  display: flex;
  align-items: center;

  gap: 0.5rem;

  border: 0;
  border-radius: 8px;

  outline: none;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
