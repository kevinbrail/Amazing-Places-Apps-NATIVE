import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const PlacesList =(props)=>{
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem 
                placeName={info.item.name} 
                placeImage={info.item.image}
                onItemPressed={() => props.onItemSelected(info.item.key)} />
            )}>      
      </FlatList>
    );
};
const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
  });
export default PlacesList;