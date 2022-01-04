import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CounterScreeen() {
  const [hitung, setHitung] = useState(0);
  return (
    <View>
      <Button
        title="Tambah"
        onPress={() => {
          setHitung(hitung + 1);
        }}
      />
      <Button
        title="Kurang"
        onPress={() => {
          setHitung(hitung - 1);
        }}
      />
      <Text>Counter Count: {hitung} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
