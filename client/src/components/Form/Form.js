import React from 'react'
import { Field } from 'redux-form'
import { Radio, Button, FormControl, FormLabel, FormControlLabel } from '@material-ui/core'

import TextField from '../Fields/TextField'
import RadioField from '../Fields/RadioField'

const Form = props => {
  const { handleSubmit, pristine, submitting } = props
  return(
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <Field
          name="age"
          component={TextField}
          label="Age (years)"
        />
        <div>
          <FormLabel component="legend">Gender (biological)</FormLabel>
          <Field
            name="gender"
            component={RadioField}
            aria-label="Gender (biological)"
          >
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Female"
            />
          </Field>
        </div>
        <Button variant="contained" color="primary" type="submit" disabled={pristine || submitting}>Submit</Button>
      </FormControl>
   </form>
  )
}

export default Form
