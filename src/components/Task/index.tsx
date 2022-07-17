import { useState } from 'react'
import { Check, Trash } from 'phosphor-react'

import {
  Container,
  CheckboxWrapper,
  CheckboxHidden,
  Checkbox,
  CheckboxLabel
} from './styles'

export function Task() {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckTask() {
    setIsChecked(!isChecked)
  }

  return (
    <Container checked={isChecked}>
      <CheckboxWrapper onClick={handleCheckTask}>
        <CheckboxHidden checked={isChecked} onChange={handleCheckTask} />

        <Checkbox checked={isChecked}>
          <Check size={16} color='white' />
        </Checkbox>

        <CheckboxLabel checked={isChecked}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </CheckboxLabel>
      </CheckboxWrapper>

      <Trash size={24} />
    </Container>
  )
}
