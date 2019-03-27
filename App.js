import React, { Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import PlacesList from './src/components/PlacesList';
import PlaceInput from './src/components/PlaceInput';
import placeImage  from './src/assets/LadyWithAFan.jpg';
import PlaceDetail from './src/components/PlaceDetail';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = { 
    places: [],
    selectedPlace: null
  }
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: `${Math.random()}`,
          name: placeName,
          image: placeImage
        })
      }
    })
  };

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return{
        places: prevState.places.filter(place =>{
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
      <PlaceDetail 
        selectedPlace={this.state.selectedPlace} 
        onItemDeleted={this.placeDeletedHandler}
        onModalClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlacesList 
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler} />
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
