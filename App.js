import React from 'react';
import { StyleSheet, Text, View, Image, ViewPagerAndroid, TextInput } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from 'react-router-native'
import { Home } from './components/Home';
import { RightPage } from './components/RightPage';
import { LeftPage } from './components/LeftPage';

export default class App extends React.Component {
  render() {
    return (
      <ViewPagerAndroid initialPage={1} style={{flex: 1}}>
        <View key={'left'}>
          <View style={{backgroundColor: 'powderblue', marginTop: 24, height: 80, paddingTop:5, paddingBottom: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{flex: 1}}
              source={require('./assets/10pines.png')}
              resizeMode={'contain'}
            />
          </View>
          <View style={{flex: 1, backgroundColor: 'white', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
            <LeftPage />
          </View>
          {/*<NativeRouter>*/}
          {/*<BackButton>*/}

          {/*<View style={{justifyContent: 'center', alignItems:'flex-start'}}>*/}
          {/*<Link to={'/'} ><Text>Home</Text></Link>*/}
          {/*<Link to={'/football'} ><Text>Futbols</Text></Link>*/}
          {/*</View>*/}
          {/*<Route exact path={'/'} component={Home} />*/}
          {/*<Route exact path={'/football'} component={Football} />*/}
          {/*</View>*/}
          {/*</BackButton>*/}
          {/*</NativeRouter>*/}
        </View>
        <View key={'center'}>
          <View style={{backgroundColor: 'powderblue', marginTop: 24, height: 80, paddingTop:5, paddingBottom: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{flex: 1}}
              source={require('./assets/10pines.png')}
              resizeMode={'contain'}
            />
          </View>
          <View style={{flex: 1, backgroundColor: 'white', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Home />
          </View>
          {/*<NativeRouter>*/}
            {/*<BackButton>*/}

                {/*<View style={{justifyContent: 'center', alignItems:'flex-start'}}>*/}
                  {/*<Link to={'/'} ><Text>Home</Text></Link>*/}
                  {/*<Link to={'/football'} ><Text>Futbols</Text></Link>*/}
                {/*</View>*/}
                {/*<Route exact path={'/'} component={Home} />*/}
                {/*<Route exact path={'/football'} component={Football} />*/}
              {/*</View>*/}
            {/*</BackButton>*/}
          {/*</NativeRouter>*/}
        </View>
        <View key={'right'}>
          <RightPage />
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
