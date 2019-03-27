import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const PlacesList =(props)=>{
    const placesOutput = props.places.map((place, i) =>(
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPressed={() => alert('Item pressed - ID ' + i)} />
      ))
    return (
        <View style={styles.listContainer}>
        {placesOutput}
      </View>
    );
};
const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
  });
export default PlacesList;