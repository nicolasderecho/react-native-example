import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: { flex: 1 }
});

class TenPinesLogo extends React.Component {
  render() {
    return <Image
      style={styles.image}
      source={require('../assets/10pines.png')}
      resizeMode={'contain'}
    />
  }
}

export { TenPinesLogo }