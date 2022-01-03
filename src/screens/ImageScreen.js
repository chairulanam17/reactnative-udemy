import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail
        title="Hutan"
        imageSource={require('../../assets/forest.jpg')}
        score={7}
      />
      <ImageDetail
        title="Gunung"
        imageSource={require('../../assets/mountain.jpg')}
        score={9}
      />
      <ImageDetail
        title="Pantai"
        imageSource={require('../../assets/beach.jpg')}
        score={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
