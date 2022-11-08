import { Text, View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { HOmeScreen } from "./HomeScreen";
import { ProjectScreen } from "./ProjectsScreen";

const Stack = createStackNavigator();

export function MyTabs() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={HOmeScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
}
