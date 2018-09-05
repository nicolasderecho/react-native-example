import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  image: { flex:1, width: '50%' }
});

class Home extends React.Component {
  render() {
    return <Image
      style={styles.image}
      source={require('../assets/10pines_logo_green.png')}
      resizeMode={'contain'}
    />
  }
}

export { Home }