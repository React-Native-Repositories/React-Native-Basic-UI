import React from 'react';
import {Platform, Pressable, View} from 'react-native';
import {Box, HStack} from 'native-base';
import AppIcon from './AppIcon';
import AppText from './AppText';
import {useNavigation} from '@react-navigation/native';
import AnimatedPressable from './AppAnimatedPressable';
import {colors} from '../Theme/colors';
import {RFValue} from '../utils/npm-helper/react-native-responsive-fontsize';
import {hp} from '../utils/dimensions';
import useThemeToggler from '../Theme/hooks/useThemeToggler';
import ProfileModal from './AppProfileModal';
function AppHeader(props) {
  const {headerName} = props;
  const navigation = useNavigation();
  const {isThemeDark} = useThemeToggler();

  const [modalVisible, setModalVisible] = React.useState(false);
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <Box
      style={{
        borderBottomWidth: 0.5,
        zIndex: 1,
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        // shadowColor: '#000000',
        elevation: 12,
        borderColor: isThemeDark
          ? colors.dark.menubarPrimary
          : colors.common.darkShadow,
        height: hp(64),
        backgroundColor: colors.light.primaryColorLight,
        justifyContent: 'center',
        // marginTop:Platform.OS==='android'? hp(30):0
      }}>
      <HStack
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <View alignItems="center" marginLeft={hp(10)}>
          <View style={{alignSelf: 'flex-start'}}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <AnimatedPressable onPress={openDrawer}>
                <AppIcon name="menu" size={hp(22)} color="white" />
              </AnimatedPressable>
              <AppText
                fontWeight="bold"
                style={{
                  fontFamily: 'GoogleSans-Medium',
                  fontSize: RFValue(14),
                  color: 'white',
                  marginLeft: hp(10),
                }}>
                {headerName ? headerName : 'Home'}
              </AppText>
            </View>
          </View>
        </View>
        <HStack marginRight={hp(28)} alignItems={'center'}>
          <Pressable
            style={{
              height: hp(32),
              width: hp(32),
              borderRadius: hp(16),
              backgroundColor: colors.common.orange,
              marginLeft: hp(18),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            unstable_pressDelay={0}
            onPress={() => setModalVisible(!modalVisible)}>
            <AppText style={{color: 'white', fontSize: RFValue(14)}}>
              {'J'}
            </AppText>
          </Pressable>
        </HStack>
      </HStack>
      <ProfileModal modalVisible={modalVisible} closeModal={closeModal} />
    </Box>
  );
}

export default AppHeader;
