import { useState } from 'react'
import { Check } from 'phosphor-react'

import { Container, Hidden, Checkbox, Text } from './styles'

export function Task() {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckTask() {
    setIsChecked(!isChecked)
  }

  return (
    <Container checked={isChecked} onClick={handleCheckTask}>
      <Hidden checked={isChecked} onChange={handleCheckTask} />

      <Checkbox checked={isChecked}>
        <Check size={16} color='white' />
      </Checkbox>

      <Text checked={isChecked}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </Text>
    </Container>
  )
}
