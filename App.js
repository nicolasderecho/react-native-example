import React from 'react';
import { View, ViewPagerAndroid } from 'react-native';
import { NativeRouter, Route, BackButton } from 'react-router-native'
import { Home } from './components/Home';
import { Omdb } from './components/Omdb';
import { PhotoPreviewer } from './components/PhotoPreviewer';
import { ItemDetail } from "./components/ItemDetail";

export default class App extends React.Component {
  render() {
    return (
      <ViewPagerAndroid initialPage={1} style={{flex: 1}}>
        <View key={'left'}>
          <PhotoPreviewer />
        </View>
        <View key={'center'}>
          <Home />
        </View>
        <View key={'right'}>
          <NativeRouter>
            <BackButton>
              <Route exact path={'/'} component={ Omdb } />
              <Route exact path={'/item/:id'} component={ ItemDetail } />
            </BackButton>
          </NativeRouter>
        </View>
      </ViewPagerAndroid>
    );
  }
}
