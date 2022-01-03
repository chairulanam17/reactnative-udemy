import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail title="Hutan" />
      <ImageDetail title="Gunung" />
      <ImageDetail title="Pantai" />
    </View>
  );
}

const styles = StyleSheet.create({});
