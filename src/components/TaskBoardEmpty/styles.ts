import styled from 'styled-components'

export const Container = styled.section`
  padding: 4rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border-top: 1px solid var(--gray-400);
`

export const MessageWrapper = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
`

interface MessageProps {
  isStrong?: boolean
}

export const Message = styled.span<MessageProps>`
  font-size: 1rem;
  font-weight: ${props => (props.isStrong ? '700' : '400')};

  text-align: center;
  line-height: 22.4px;

  color: var(--gray-300);
`
