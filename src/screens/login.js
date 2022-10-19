import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator, StackActions, NavigationActions } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { setUserName, deleteUserName } from "../redux/actions/action";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';

const Stack = createStackNavigator();

function LoginScreen() {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();
  const handleText = () => {
    dispatch(setUserName(name));
  };
  const store = useSelector((store) => store.user.name);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
      </View>
      <View style={{ marginTop: 64 }}>
      </View>
      <View style={{ marginHorizontal: 32 }}>
        <Text style={styles.header}>
          Username
        </Text>
        <TextInput
          style={styles.input}
          placeholder="DesignInCode"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <View style={{ alignItems: 'flex-end', marginTop: 64 }}>
          <TouchableOpacity style={styles.continue}
            onPress={() => {
              handleText();
              navigation.navigate('Home')
            }}>
            <Ionicons name="arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}


function ChatScreen({ navigation }) {
  const store = useSelector((store) => store.user.value);
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(deleteUserName());
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Log Out"
        onPress={() => {
          remove();
          navigation.navigate('Login')
        }}
      />
      <Text style={{ margin: 10 }}>Username : {store}</Text>
    </View>
  );
}

const StackScreen = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default StackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -120,
    top: -20
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#514ESA",
    marginTop: 32
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "514ESA",
    fontWeight: '600'
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#9075E3",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
