import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="ke layar komponen"
        onPress={() => navigation.navigate('Component')}
      />
      <Button
        title="ke layar list"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="ke layar image"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="ke layar counter"
        onPress={() => navigation.navigate('Count')}
      />
      <Button
        title="ke layar color"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="ke layar kotak"
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
