import styled from 'styled-components'

interface ContainerProps {
  checked: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  display: flex;
  align-items: flex-start;

  gap: 0.75rem;

  border-radius: 8px;
  border: ${props =>
    props.checked ? '1px solid var(--gray-500)' : '1px solid var(--gray-400)'};

  padding: 1rem;
  background: var(--gray-500);

  > svg {
    cursor: pointer;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const CheckboxHidden = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  white-space: nowrap;

  width: 1px;
  height: 1px;

  padding: 0;
  margin: -1px;
`

interface CheckboxLabelProps {
  checked: boolean
}

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  font-size: 0.875rem;
  font-weight: 400;

  color: ${props => (props.checked ? 'var(--gray-300)' : 'var(--gray-100)')};
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
  line-height: 19.6px;
`

interface CheckboxProps {
  checked: boolean
}

export const Checkbox = styled.label<CheckboxProps>`
  width: 24px;
  height: 24px;

  border-radius: 50%;
  margin-right: 0.75rem;

  border: ${props =>
    props.checked ? '1px solid var(--purple)' : '1px solid var(--blue)'};

  background: ${props => (props.checked ? 'var(--purple)' : 'transparent')};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    display: ${props => (props.checked ? 'unset' : 'none')};
  }
`
