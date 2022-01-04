import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
}

const styles = StyleSheet.create({});
