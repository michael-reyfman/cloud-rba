import React from 'react'
import { RadioGroup } from '@material-ui/core'

export default function RadioFieldHOC({ input, ...rest }) {
  return (
    <RadioGroup
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  )
}
