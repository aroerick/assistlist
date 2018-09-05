import React, { Fragment } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Form, Field } from 'react-final-form';
import AccountInput from '../../components/AccountInput';
import Button from '../../components/Button'

const Login = () => {
  return (
    <Form
      onSubmit={values => console.log(values)}
      render={({ handleSubmit, pristine, values }) => (
        <Fragment>
          <Field name="email">
            {({ input, meta }) => <AccountInput input={input} name="Email" />}
          </Field>
          <Field name="username">
            {({ input, meta }) => (
              <AccountInput input={input} name="Username" />
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <AccountInput input={input} name="Password" password />
            )}
          </Field>
          <Field name="verifyPassword">
            {({ input, meta }) => (
              <AccountInput input={input} name="Re-enter Password" password />
            )}
          </Field>
          <Button onPress={handleSubmit} name="Next" color="green"/>
        </Fragment>
      )}
    />
  );
};

export default Login;
