import React from 'react'
import { Field } from 'redux-form'
import { Radio, Button, FormControl, FormLabel, FormControlLabel } from '@material-ui/core'

import TextField from '../Fields/TextField'
import RadioField from '../Fields/RadioField'

class Form extends React.Component {
  render() {
    const { pristine, submitting, handleSubmit } = this.props

    return(
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <div>
            <FormLabel component="legend">Пол (биологический)</FormLabel>
            <Field
              name="gender"
              component={RadioField}
              aria-label="Gender (biological)"
            >
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Мужской"
                style={{ marginBottom: 0,}}
              />
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Женский"
              />
            </Field>
          </div>
          <Field
            name="age"
            component={TextField}
            label="Возраст (полных лет)"
          />
          <Field
            name="red_blood_cells"
            component={TextField}
            label="Эритроциты, 10^12"
          />
          <Field
            name="white_blood_cells"
            component={TextField}
            label="Лейкоциты, 10^9"
          />
          <Field
            name="hemoglobin"
            component={TextField}
            label="Гемоглобин, г/л"
          />
          <Field
            name="color"
            component={TextField}
            label="Цветовой показатель, %"
          />
          <Field
            name="trombs"
            component={TextField}
            label="Тромбоциты, г/л"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={pristine || submitting}
            style={{marginTop: 24}}
          >
            Отправить форму
          </Button>
        </FormControl>
     </form>
    )
  }
}

export default Form
