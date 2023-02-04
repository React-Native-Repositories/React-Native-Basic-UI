import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Pressable,
  Platform,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import AppIcon from './AppIcon';
import {colors} from '../Theme/colors';
import {RFValue} from '../utils/npm-helper/react-native-responsive-fontsize';
import ToggleDarkMode from './ToggleDarkMode';
import useThemeToggler from '../Theme/hooks/useThemeToggler';
import {hp} from '../utils/dimensions';

export default function ProfileModal(props) {
  const {isThemeDark} = useThemeToggler();
  return (
    <View>
      <Modal
        visible={props.modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          props.closeModal();
        }}>
        <Pressable
          delayPressIn={0}
          style={{flex: 1}}
          activeOpacity={1}
          onPressOut={() => {
            props.closeModal();
          }}>
          <View
            style={{
              position: 'absolute',
              top: Platform.OS === 'ios' ? hp(75) : hp(35),
              bottom: 0,
              right: 0,
              left: 0,
              width: '100%',
              minHeight: hp(310),
            }}>
            <View
              style={{
                margin: 20,
                backgroundColor: isThemeDark
                  ? colors.dark.sidebar
                  : colors.light.background,
                borderRadius: 20,
                padding: 35,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <View
                style={{
                  marginTop: hp(26),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <View
                    style={{
                      height: hp(32),
                      width: hp(32),
                      borderRadius: hp(16),
                      backgroundColor: isThemeDark
                        ? colors.common.white
                        : colors.light.primaryColorLight,
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      left: 0,
                      // top: 15,
                    }}>
                    <AppText
                      style={{
                        color: isThemeDark
                          ? colors.light.primaryColorLight
                          : colors.common.white,
                        fontSize: RFValue(14),
                        fontFamily: 'GoogleSans-Medium',
                        fontWeight: '800',
                      }}>
                      {'J'}
                    </AppText>
                  </View>

                  <View
                    style={{
                      marginLeft: hp(45),
                    }}>
                    <AppText
                      style={{
                        fontSize: RFValue(12),
                        fontWeight: '500',
                        fontFamily: 'GoogleSans-Medium',
                        color: isThemeDark
                          ? colors.common.white
                          : colors.dark.background,
                      }}>
                      {'Jhon Doe'}
                    </AppText>
                    <AppText
                      style={{
                        fontSize: RFValue(10),
                        fontFamily: 'GoogleSans-Regular',
                        color: isThemeDark
                          ? colors.common.white
                          : colors.dark.secondaryText,
                      }}>
                      {'jhondoe@gmail.com'}
                    </AppText>
                  </View>
                </View>
                <ToggleDarkMode color={isThemeDark ? 'white' : 'black'} />
              </View>
              <View
                style={{
                  marginTop: hp(16),
                  borderWidth: 0.5,
                  borderColor: '#DADCE0',
                  width: '100%',
                }}
              />
              <Pressable
                delayPressIn={0}
                style={{marginTop: hp(20), justifyContent: 'center'}}
                onPress={() => {
                  Alert.alert(
                    'Logout',
                    'Are you sure you want to Logout?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: () => {
                          props.closeModal();
                        },
                      },
                    ],
                    {
                      cancelable: false,
                    },
                  );
                  return true;
                }}>
                <AppIcon
                  name="log-out-outline"
                  size={hp(24)}
                  color={isThemeDark ? 'white' : '#5F6368'}
                  style={{
                    position: 'absolute',
                    left: 0,
                  }}
                />
                <Text
                  style={{
                    color: isThemeDark ? 'white' : '#5F6368',
                    marginLeft: hp(45),
                    fontFamily: 'GoogleSans-Regular',
                    fontSize: RFValue(12),
                  }}>
                  Sign Out
                </Text>
              </Pressable>
              <View style={{marginTop: hp(10), justifyContent: 'center'}}>
                <AppIcon
                  name="help-circle-outline"
                  size={hp(24)}
                  color={isThemeDark ? 'white' : '#5F6368'}
                  style={{
                    position: 'absolute',
                    left: 0,
                  }}
                />
                <Text
                  style={{
                    color: isThemeDark ? 'white' : '#5F6368',
                    marginLeft: hp(45),
                    fontFamily: 'GoogleSans-Regular',
                    textAlign: 'left',
                    fontSize: RFValue(12),
                  }}>
                  Help & Feedback
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#DADCE0',
                  width: '100%',
                  marginTop: hp(16),
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: hp(16),
                }}>
                <AppText
                  style={{
                    fontSize: RFValue(10),
                    fontFamily: 'GoogleSans-Regular',
                    color: isThemeDark ? 'white' : '#5F6368',
                  }}>
                  Privacy Policy
                </AppText>
                <View
                  style={{
                    height: 3,
                    width: 3,
                    borderRadius: 1.5,
                    backgroundColor: '#5F6368',
                  }}
                />
                <AppText
                  style={{
                    fontSize: RFValue(10),
                    fontFamily: 'GoogleSans-Regular',
                    color: isThemeDark ? 'white' : '#5F6368',
                  }}>
                  Terms of Service
                </AppText>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
