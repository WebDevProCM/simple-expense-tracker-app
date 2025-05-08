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
import { createStackNavigator } from '@react-navigation/stack';
import ManageExpenseScreen from './screens/manage-expense-screen';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  const stack = createStackNavigator();
  const bottomTab = createBottomTabNavigator();

  const TabsOverview = () =>(
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
  )

  return (
    <>
    <Provider store={store}>
    <StatusBar style='light'/>
    <NavigationContainer>
      <stack.Navigator 
        screenOptions={{
          headerTitleStyle: {
            color: "white"
          },
          headerStyle: {
            backgroundColor: "#4D55CC"
          },
        }}
      >
        <stack.Screen 
          name='expense-overview'
          options={{
            headerShown:false,
          }}
          component={TabsOverview}
        />

        <stack.Screen 
          name='manage-expense'
          component={ManageExpenseScreen}
          options={{
            cardStyle: {
              backgroundColor: "#4335A7"
            },
            presentation: "modal",
            title: "Manage Expense"
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
}
