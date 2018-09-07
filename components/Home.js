import React from 'react';
import { StyleSheet, Text, View, Image, Button, Modal } from 'react-native';
import {AppHeader} from "./AppHeader";
import {TenPinesLogo} from "./TenPinesLogo";

const styles = StyleSheet.create({
  image: { flex:1, width: 200 },
  container: {flex: 1, backgroundColor: 'white', padding: 10, alignItems: 'center', justifyContent: 'space-evenly'},
  modalContainer: {flex: 1, margin: 50, justifyContent: 'space-evenly'}
});

class Home extends React.Component {

  state = { openModal: false };

  toggleModal = () => {
    this.setState( (state) => ({ openModal: !state.openModal }) );
  };

  //This is added because Modal requires a handler for onRequestClose
  doNothing(){

  }

  render() {
    return <React.Fragment>
      <AppHeader><TenPinesLogo/></AppHeader>
      <View style={styles.container}>
        <Modal animationType={'slide'} transparent={false} visible={this.state.openModal} onRequestClose={this.doNothing}>
          <View style={styles.modalContainer}>
            <Text>Texto de prueba Dentro de un modal en la App Mobile</Text>
            <Button title={'Cerrar'} onPress={this.toggleModal} />
          </View>
        </Modal>
        <Button title={'open Modal'} onPress={this.toggleModal}/>
        <Image
          style={styles.image}
          source={require('../assets/10pines_logo_green.png')}
          resizeMode={'contain'}
        />
      </View>
    </React.Fragment>
  }
}

export { Home }