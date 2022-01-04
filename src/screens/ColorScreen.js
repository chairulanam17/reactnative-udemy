import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function ColorScreen() {
  const [warna, setWarna] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setWarna([...warna, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={warna}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});
