/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {UserContext, UserProvider} from './context/userContext';
import Splash from './src/splash/Splash';
import SignIn from './src/auth/SignIn';
import Customer from './src/customers';
import Dashboard from './src/dashboard';
import Profile from './src/profile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import {revokeUser} from './redux/features/authSlice';
import SetTopBox from './src/auth/SetTopBox';

function Tabs() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,

          tabBarActiveTintColor: '#cf9f47',
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 5,
            fontFamily: 'NotoSerifTamil-Medium',
            letterSpacing: 0.5,
          },
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 80,
            alignItems: 'center',
            backgroundColor: '#242424',
          },
          tabBarIconStyle: {
            marginBottom: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            unmountOnBlur: true,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="This Month"
          component={Customer}
          options={{
            tabBarLabel: 'This Month',
            unmountOnBlur: true,

            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="clipboard-text"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Customers"
          component={Customer}
          options={{
            tabBarLabel: 'Customers',

            unmountOnBlur: true,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            // tabBarBadge: 0,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            unmountOnBlur: true,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const App = () => {
  const user = useSelector(state => state.auth);
  console.log({user});
  useEffect(() => {
    revokeUser();
  }, []);

  return (
    <>
      <SafeAreaProvider>
        {/* <ToastProvider
          dangerIcon={
            <MaterialIcons name="dangerous" size={20} color="#fff" />
          }> */}

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {!user.isSignedIn ? (
              <>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="SignIn" component={SignIn} />
                {/* <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Otp" component={Otp} /> */}
              </>
            ) : (
              <>
                <Stack.Screen name="SetTopBox" component={SetTopBox} />
                <Stack.Screen name="Main" component={Tabs} />
                {/* <Stack.Screen name="ChooseLoc" component={ChooseLocation} />
                <Stack.Screen name="ViewIssue" component={ViewIssue} />
                <Stack.Screen name="AddIssue" component={AddIssues} />
                <Stack.Screen name="EditIssue" component={EditIssue} />
                <Stack.Screen name="ThankYou" component={ThankYou} /> */}
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>

        {/* </ToastProvider> */}
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
