import { StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Box, HStack} from 'native-base';
import { AppText} from '@components';
import AnimatedPressable from '@components/AppAnimatedPressable';
import useThemeToggler from '@theme/hooks/useThemeToggler';
import {ThemeColors} from '@theme';
import {hp} from '@utils/dimensions';
import {RFValue} from '@utils/npm-helper/react-native-responsive-fontsize';
import CloseSvgComponent from '@assets/svg/common/close';
import SaveSvgComponent from '@assets/svg/common/save';

export default function CreateHeader(props) {
  const {isThemeDark} = useThemeToggler();
  const [userInfo] = useState({});
  const {
    // navigation,
    close,
    submitHeader,
    leftHeader,
    submit,
    handleClose,
  } = props;
  return (
      <Box
        style={[
          styles.container,
          {
            borderColor: isThemeDark
              ? ThemeColors.darkMode.menubarPrimary
              : ThemeColors.common.darkShadow,
            backgroundColor: isThemeDark
              ? ThemeColors.darkMode.menubarPrimary
              : ThemeColors.lightMode.background,
          },
        ]}>
        <HStack
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%">
          <HStack alignItems="center" marginLeft={28}>
            {close && (
              <AnimatedPressable onPress={handleClose}>
                <CloseSvgComponent color={isThemeDark?ThemeColors.darkMode.primaryText:ThemeColors.lightMode.subHeaderBlack} />
              </AnimatedPressable>
            )}
            {leftHeader && (
              <AppText style={[styles.leftHeader,{
                color:isThemeDark?ThemeColors.darkMode.primaryText:'#202124'
              }]}>{leftHeader}</AppText>
            )}
          </HStack>
          <HStack marginRight={28} alignItems={'center'}>
            {submitHeader && (
              <AppText style={styles.submitHeader}>{submitHeader}</AppText>
            )}
            {submit && <SaveSvgComponent color={'#1a73e8'} />}
          </HStack>
        </HStack>
      </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    zIndex: 1,
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: hp(64),
    shadowColor: '#000000',
    elevation: 12,
    justifyContent: 'center',
  },
  leftHeader: {
    color: '#202124',
    fontSize:RFValue(14),
    marginLeft: hp(10),
    fontFamily:'GoogleSans-Medium'
  },
  submitHeader: {
    color: '#1A73E8',
    marginRight: hp(3),
    fontSize: RFValue(12),
  },
});
