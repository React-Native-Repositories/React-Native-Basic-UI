/*
 * Author: Sethu kumar
 */

import { Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from './npm-helper/react-native-responsive-screen';

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = dimension => {
  return wp2dp((dimension / 360) * 100 + '%');
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = dimension => {
  return hp2dp((dimension / 760) * 100 + '%');
};

export const windowWidth = wp(Dimensions.get('window').width);
export const windowHeight = hp(Dimensions.get('window').height);