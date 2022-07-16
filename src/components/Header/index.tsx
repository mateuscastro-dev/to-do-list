import logoImg from '../../assets/logo.svg'

import { Container, Brand } from './styles'

export function Header() {
  return (
    <Container>
      <Brand src={logoImg} />
    </Container>
  )
}
