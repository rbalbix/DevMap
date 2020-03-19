import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: 37.7957227, longitude: -122.4057583 }}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://avatars0.githubusercontent.com/u/38765245?s=400&u=7fc0522151d797c0ac7986b49348d295b5574d95&v=4'
          }}
        />

        <Callout
          onPress={() => {
            // navegação
            navigation.navigate('Profile', { github_username: 'rbalbix' });
          }}
        >
          <View style={styles.callout}>
            <Text style={styles.devName}>Família Linda</Text>
            <Text style={styles.devBio}>Bio da Família Linda</Text>
            <Text style={styles.devTechs}>Paris, Orlando, Niterói</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#fff'
  },

  callout: {
    width: 260
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16
  },

  devBio: {
    color: '#666',
    marginTop: 5
  },

  devTechs: {
    marginTop: 5
  }
});

export default Main;
