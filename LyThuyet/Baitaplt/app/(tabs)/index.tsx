import React from 'react';
import { } from 'react-native';
import { Stack } from 'expo-router';
import Dangnhap from './Dangnhap';


const index = () => {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //   {/* Các route khác của bạn */}
    // </Stack.Navigator>
    <Dangnhap />
    //<Demobuoi3 />
  );
};

export default index;