import Form from './Form'
import { reduxForm } from 'redux-form'

const validate = values => {
    const errors = {}
    if(!values.age) {
        errors.age = 'Укажите свой возраст'
    }
    if(!values.gender) {
      errors.gender = 'Укажите пол'
    }
    return errors
}

export default reduxForm({
  form: 'rba',
  validate,
})(Form)
