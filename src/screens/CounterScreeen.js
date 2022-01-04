import React, { useReducer, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default function CounterScreeen() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title="Tambah"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title="Kurang"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text>Counter Count: {state.count} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
