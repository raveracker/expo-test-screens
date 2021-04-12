import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { TouchableOpacity, Image } from "react-native";
import HomeScreen from "../src/HomeScreen";
import PaymentScreen from "../src/PaymentScreen";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          headerTitle: "",
          headerLeft: (props) => <HeaderBackButton {...props} />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerRight: () => {
            return (
              <TouchableOpacity style={{ paddingRight: 15 }}>
                <Image
                  source={require("../assets/share-black.png")}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
