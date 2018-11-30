import Form from './Form'
import { reduxForm } from 'redux-form'

const validate = values => {
    const errors = {}
    if(!values.age) {
        errors.age = 'Required'
    }
    return errors
}

export default reduxForm({
  form: 'rba',
  validate,
})(Form)
