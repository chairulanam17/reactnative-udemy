import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ImageDetail({ imageSource, title, score }) {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Scrore - {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
