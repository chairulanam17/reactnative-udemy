import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CompoScreen() {
  const namaSaya = 'Chairul Anam';
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45 }}>Ini Komponen</Text>
      <Text style={{ fontSize: 20 }}>Nama Saya : {namaSaya}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
