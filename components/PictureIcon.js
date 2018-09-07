import React from 'react';
import { Image } from 'react-native';

class PictureIcon extends React.Component {
  render() {
    return <Image
      source={require('../assets/picture_icon.png')}
      resizeMode={'contain'}
    />
  }
}

export { PictureIcon }