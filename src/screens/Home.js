import React from 'react';
import { View, Linking, Text } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Map from './Map';
import Favorites from './Favorites';

const Drawer = createDrawerNavigator();

export default function ({ navigation }) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Mapa" component={Map}/>
        </Drawer.Navigator>
    );
}