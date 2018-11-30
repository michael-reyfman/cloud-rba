import React from 'react'
import { TextField } from '@material-ui/core'

export default function TextFieldHOC({
 input,
 label,
 meta: { touched, error },
 ...custom
}) {
  return (
    <TextField
      floatingLabelText={label}
      label={label}
      error={touched && error}
      {...input}
      {...custom}
    />
  )
}
