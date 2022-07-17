import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
`

export const Header = styled.header`
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
`

interface HeaderTextProps {
  type: 'created' | 'completed'
}

export const HeaderText = styled.span<HeaderTextProps>`
  color: ${props =>
    props.type === 'created' ? 'var(--blue)' : 'var(--purple)'};

  font-size: 0.875rem;
  font-weight: 700;
`

export const HeaderBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray-100);
  background: var(--gray-400);

  width: 25px;
  height: 19px;

  border-radius: 999px;
  padding: 0.125rem 0.5rem;

  font-size: 0.75rem;
  font-weight: 700;
`
