import React from 'react'
import { Form, Dimmer, Loader, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { combineValidators, isRequired, composeValidators } from 'revalidate'
import { Field } from 'components/Form'

let _Form = ({ isLoading, error, onSubmit, handleSubmit, submitSucceeded, successMessage }) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Dimmer active={isLoading} inverted>
      <Loader>Loading...</Loader>
    </Dimmer>
    <Message success icon='check circle' visible={submitSucceeded} content={successMessage} />
    <Message error icon='exclamation circle' visible={!!error} header='Error' content={error} />
    <Field label='Nama' name='name' />
    <Field label='Kode' name='code' />
    <Form.Group inline>
      <Form.Button color='teal' icon='save' content='Simpan' />
      <Link to='/provinsi'>Kembali</Link>
    </Form.Group>
  </Form>
)

const validate = combineValidators({
  name: composeValidators(isRequired('Nama provinsi'))(),
  code: composeValidators(isRequired('Kode provinsi'))()
})

_Form = reduxForm({
  form: 'provincy',
  validate
})(_Form)

export default _Form
