import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export const AccountInput = ({ input, name, password }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={name}
      placeholderTextColor="#00ADCB80"
      {...input}
      secureTextEntry={password}
    />
  );
};
