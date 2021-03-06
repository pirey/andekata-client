import React from 'react'
import { Form, Dimmer, Loader, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { combineValidators, isRequired, composeValidators } from 'revalidate'
import { Field } from 'components/Form'

let DepartmentForm = ({ isLoading, error, onSubmit, handleSubmit, submitSucceeded, successMessage }) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Dimmer active={isLoading} inverted>
      <Loader>Loading...</Loader>
    </Dimmer>
    <Message success icon='check circle' visible={submitSucceeded} content={successMessage} />
    <Message error icon='exclamation circle' visible={!!error} header='Error' content={error} />
    <Field label='Nama' name='name' />
    <Form.Group inline>
      <Form.Button color='teal' icon='save' content='Simpan' />
      <Link to='/department'>Kembali</Link>
    </Form.Group>
  </Form>
)

const validate = combineValidators({
  name: composeValidators(isRequired('Nama departmen'))()
})

DepartmentForm = reduxForm({
  form: 'department',
  validate
})(DepartmentForm)

export default DepartmentForm
