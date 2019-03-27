import React, { Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import PlacesList from './src/components/PlacesList'
import PlaceInput from './src/components/PlaceInput'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = { 
    places: []
  }
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlacesList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
