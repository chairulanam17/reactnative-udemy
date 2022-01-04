import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/colorCounter';

export default function SquareScreen() {
  //color increment
  const COLOR_INCREMENT = 15;
  //state color
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green"
      />
      <View
        style={{
          alignSelf: 'center',
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
