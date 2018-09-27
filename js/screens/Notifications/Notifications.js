import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.notificationText}> No Notifications </Text>
    </View>
  );
};

export default Notifications;
