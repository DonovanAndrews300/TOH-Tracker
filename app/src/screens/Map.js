import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map() {
    const markers = [
        {   title:"tree",
            description:"testto",
            latlng: {
                latitude: 39.991367,
                longitude: -75.210734
              }
        },
        {   title:"tree",
            description:"testto",
            latlng: {
                latitude: 39.986855,
                longitude:  -75.211423
              }
        }
    ]
  return (
    <View style={styles.container}>
      <MapView 
      initialRegion={{
      latitude: 39.9526,
      longitude: -75.1652,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    }}
      style={styles.map}>

{markers.map((marker, index) => (
    <Marker
      key={index}
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))}   
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});