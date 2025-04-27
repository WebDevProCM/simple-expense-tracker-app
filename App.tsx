import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecentExpensesScreen from './screens/recent-expenses-screen';
import AllExpensesScreen from './screens/all-expenses-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { BlurView } from 'expo-blur';
import HeaderAddButton from './components/header-add-button';

export default function App() {
  const bottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <bottomTab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: "#FEBA17",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#4D55CC",
          },
          headerTitleStyle: {
            color: "white"
          },
          headerRight: () => (
            <HeaderAddButton />
          ),
          headerStyle: {
            backgroundColor: "#4D55CC"
          },
          sceneStyle: {
            backgroundColor: "#4335A7"
          }
        }}
      >
        <bottomTab.Screen 
          component={RecentExpensesScreen}
          name='recentExpenses'
          options={{
            title: "Recent Expenses",
            tabBarIcon: ({color, size}) =>(
              <MaterialCommunityIcons name="timer-sand" size={size} color={color} />
            )
          }}
        />

        <bottomTab.Screen 
          component={AllExpensesScreen}
          name='allExpenses'
          options={{
            title: "All Expenses",
            tabBarIcon: ({color, size}) =>(
              <Ionicons name="calendar-outline" size={size} color={color} />
            )
          }}
        />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
}
