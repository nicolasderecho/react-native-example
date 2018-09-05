import React from 'react';
import {StyleSheet, Image, View, Button, TouchableOpacity, Text} from "react-native";
import { Camera, Permissions } from 'expo';

const styles = StyleSheet.create({
  imagePreview: { borderColor: '#F44336', borderWidth: 1 },
  container: { flex:1, justifyContent: 'space-evenly' },
  cameraContainer: { flex: 1, flexDirection: 'row', alignItems: 'stretch'},
  flipButton: { fontSize: 18, marginBottom: 10, padding: 20, color: 'red', backgroundColor: 'white', borderRadius: 50 },
  touchableButton: { flex: 1, alignSelf: 'flex-end', alignItems: 'center' }
});

class LeftPage extends React.Component {

  state = {
    type: Camera.Constants.Type.back
  };

  onPressButton = () => {
    Permissions.askAsync(Permissions.CAMERA)
      .then((response) => { this.setState({ hasCameraPermission: response.status === 'granted', displayCamera: true }) } );
  };

  saveCameraRef = (cameraReference) => {
    this.camera = cameraReference;
  };

  takePicture = () => {
    this.camera.takePictureAsync().then((picture) => this.setState({picture: picture, displayCamera: false}));
  };

  changeCamera = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  };

  displayCamera = () => {
    return <View style={styles.cameraContainer}>
      <Camera style={{ flex: 1 }} ref={this.saveCameraRef} type={this.state.type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={styles.touchableButton}
            onPress={this.takePicture} >
            <Text style={styles.flipButton}> Take </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableButton}
            onPress={this.changeCamera}>
            <Text style={styles.flipButton}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  };

  render() {
    if(this.state.displayCamera && this.state.hasCameraPermission){
      return this.displayCamera();
    }

    return <View style={styles.container}>
      <Button title={'Take a Photos'} onPress={this.onPressButton}/>
      <View>
        {
          !!this.state.picture
            ? <View><Image  style={{width: 200, height: 200 }} source={{uri: this.state.picture.uri}} resizeMode={'cover'} /></View>
            : <Image
              style={styles.imagePreview}
              source={require('../assets/picture_icon.png')}
              resizeMode={'contain'}
            />
        }
      </View>

    </View>
  }
}

export { LeftPage }