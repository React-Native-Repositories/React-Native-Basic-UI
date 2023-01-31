import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // console.log(error);
  }
};

export const getToken = async key => {
  try {
    const value = await AsyncStorage.getItem(key?key:'access_token');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // console.log(error);
  }
  return false;
};

export const removeToken = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // console.log('error removing auth token', error);
  }
};
