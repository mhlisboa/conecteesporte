import React from "react";
import { View, Linking, StyleSheet } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
  TextInput,
} from "react-native-rapi-ui";
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";


export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();

  const locations = require("../../geolocation.json");

  return (
    <Layout>
      <View style={styles.container}>
        <MapView 
          style={styles.map} 
          initialRegion={
            {
              latitude: -22.9064,
              longitude: -47.0616,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
          }  
        >
          <Marker
            coordinate={
              {
                latitude: locations[1].latitude, 
                longitude: locations[1].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[2].latitude, 
                longitude: locations[2].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[3].latitude, 
                longitude: locations[3].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[4].latitude, 
                longitude: locations[4].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[5].latitude, 
                longitude: locations[5].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[6].latitude, 
                longitude: locations[6].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[7].latitude, 
                longitude: locations[7].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[8].latitude, 
                longitude: locations[8].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[9].latitude, 
                longitude: locations[9].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[10].latitude, 
                longitude: locations[10].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[11].latitude, 
                longitude: locations[11].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[12].latitude, 
                longitude: locations[12].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[13].latitude, 
                longitude: locations[13].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[14].latitude, 
                longitude: locations[14].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[15].latitude, 
                longitude: locations[15].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[16].latitude, 
                longitude: locations[16].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[17].latitude, 
                longitude: locations[17].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[18].latitude, 
                longitude: locations[18].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[19].latitude, 
                longitude: locations[19].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[20].latitude, 
                longitude: locations[20].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[21].latitude, 
                longitude: locations[21].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[22].latitude, 
                longitude: locations[22].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[23].latitude, 
                longitude: locations[23].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[24].latitude, 
                longitude: locations[24].longitude
              }
            }
          />
          <Marker
            coordinate={
              {
                latitude: locations[25].latitude, 
                longitude: locations[25].longitude
              }
            }
          />
        </MapView>
      </View>
      <View style={styles.bottomBar}>
            <TextInput
              placeholder="Pesquisar"
              leftContent={
                <Ionicons name="search" size={20} color={themeColor.gray300} />
              }
              borderRadius={20}
            />
      </View>
    </Layout>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000000",
    alignItems: "center",
    flex: 1,
  },

  map: {
    width: '100%',
    height: '110%',
  },

  bottomBar: {
    backgroundColor: "#004AAD",
    height: 120,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 35,
    alignItems: "center",
    width: "100%",
  },

  topBar: {
    backgroundColor: "#004AAD",
    height: 30,
    padding: 30,
    alignItems: "center",
    width: "100%",
  }
});

