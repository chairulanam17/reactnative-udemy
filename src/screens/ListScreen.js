import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ListScreen() {
  const teman = [
    { name: 'teman 1', age: 10 },
    { name: 'teman 2', age: 11 },
    { name: 'teman 3', age: 12 },
    { name: 'teman 4', age: 13 },
    { name: 'teman 5', age: 14 },
    { name: 'teman 6', age: 15 },
    { name: 'teman 7', age: 16 },
    { name: 'teman 8', age: 17 },
  ];
  return (
    <FlatList
      keyExtractor={(temen) => temen.name}
      data={teman}
      renderItem={({ item }) => {
        return (
          <Text>
            {item.name} - Umur {item.age}{' '}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
