import { Text, SafeAreaView } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Topbar from "../components/Topbar";
import { Searchbar } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Latest"
        component={Latest}
        options={{
          tabBarIcon: () => <Icon name="home" size={22} />,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: () => <Icon name="book" size={22} />,
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}

function Latest() {
  return (
    <SafeAreaView
      style={{
        padding: "1.5rem",
      }}
    >
      <Topbar />
      <Searchbar
        style={{
          paddingRight: 20,
        }}
      />
      <Text>Latest</Text>
    </SafeAreaView>
  );
}

function Library() {
  return (
    <SafeAreaView>
      <Text>Library</Text>
    </SafeAreaView>
  );
}
