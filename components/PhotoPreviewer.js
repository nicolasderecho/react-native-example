import React from 'react';
import {StyleSheet, Image, View, Button, TouchableOpacity, Text} from "react-native";
import { Camera, Permissions } from 'expo';
import {AppHeader} from "./AppHeader";
import {TenPinesLogo} from "./TenPinesLogo";
import {PictureIcon} from "./PictureIcon";

const styles = StyleSheet.create({
  container: { flex:1, justifyContent: 'space-evenly', backgroundColor: 'white', padding: 10, alignItems: 'center' },
  cameraContainer: { flex: 1, flexDirection: 'row', alignItems: 'stretch'},
  flipButton: { fontSize: 18, marginBottom: 10, padding: 20, color: 'red', backgroundColor: 'white', borderRadius: 50 },
  touchableButton: { flex: 1, alignSelf: 'flex-end', alignItems: 'center' },
  picture: {width: 200, height: 200 },
  camera: { flex: 1 },
  cameraView: { flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }
});

class PhotoPreviewer extends React.Component {

  state = {
    type: Camera.Constants.Type.back,
    hasCameraPermission: false,
    displayCamera: false,
    picture: null
  };

  onPressButton = () => {
    Permissions.askAsync(Permissions.CAMERA)
      .then((response) => this.setState({ hasCameraPermission: response.status === 'granted', displayCamera: true }));
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

  renderCamera() {
    return <View style={styles.cameraContainer}>
      <Camera style={styles.camera} ref={this.saveCameraRef} type={this.state.type} autoFocus={"off"} skipProcessing={true}>
        <View style={styles.cameraView}>
          <TouchableOpacity style={styles.touchableButton} onPress={this.takePicture} >
            <Text style={styles.flipButton}> Take </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableButton} onPress={this.changeCamera}>
            <Text style={styles.flipButton}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  };

  render() {
    const { displayCamera, hasCameraPermission } = this.state;

    if(displayCamera && hasCameraPermission){
      return this.renderCamera();
    }

    return <React.Fragment>
      <AppHeader><TenPinesLogo/></AppHeader>
      <View style={styles.container}>
        <Button title={'Take a Photo'} onPress={this.onPressButton}/>
        <View>
          {
            !!this.state.picture
              ? <View><Image  style={styles.picture} source={{uri: this.state.picture.uri}} resizeMode={'cover'} /></View>
              : <PictureIcon/>
          }
        </View>
      </View>
    </React.Fragment>
  }
}

export { PhotoPreviewer }