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
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <View style={styles.topBar}></View>
      
      <View style={styles.container}>
        <MapView 
          style={styles.map} 
          initialRegion={{
            latitude: -22.9064,
            longitude: -47.0616,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}  
        />
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

