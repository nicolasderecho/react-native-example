import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: { backgroundColor: 'powderblue', marginTop: 24, height: 80, paddingTop:5, paddingBottom: 5, alignItems: 'center', justifyContent: 'center'}
});

class AppHeader extends React.Component {
  render(){
    const { children } = this.props;
    return <View style={styles.container}>
      { children }
    </View>
  }
}

export { AppHeader }
