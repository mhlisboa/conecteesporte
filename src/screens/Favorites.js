import React from "react";
import { View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fontWeight="medium">Parece que você ainda não tem nenhum local favorito...</Text>
        <Text fontWeight="medium">Quando tiver, eles aparecerão aqui!</Text>
        
      </View>
    </Layout>
  );
}
