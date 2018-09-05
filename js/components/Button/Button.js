import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export const Button = ({ onPress, name, color }) => {
  console.log(color)
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}