// https://react-native-share.github.io/react-native-share/docs/install  -------- For Share More Options ---------
// https://stackoverflow.com/questions/51545064/how-to-make-phone-call-in-react-native ----call

import {
  Share,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React from 'react';
import {AppText, AppThemeScreen} from '../../../components';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
import {ScrollView} from 'native-base';
import {hp} from '../../../utils/dimensions';
import {RFValue} from '../../../utils/npm-helper/react-native-responsive-fontsize';
import {colors} from '../../../Theme/colors';
import RNFetchBlob from 'rn-fetch-blob';

export default function MoreScreen() {
  const {isThemeDark} = useThemeToggler();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please install this app and stay safe , AppLink : https://play.google.com/store/apps/details?id=com.url_here',
        url: ' https://play.google.com/store/apps/details?id=com.url_here',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const callNumber = phone => {
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `tel://${phone}`;
    } else {
      phoneNumber = `tel://${phone}`;
    }
    Linking.openURL(phoneNumber);
    // Linking.canOpenURL(phoneNumber)
    //   .then(supported => {
    //     if (!supported) {
    //       Alert.alert('Phone number is not available');
    //     } else {
    //       return Linking.openURL(phoneNumber);
    //     }
    //   })
    //   .catch(err => console.log(err));
  };

  /* ------------------------------   Download Section ------------------------------------ */

  //add below in  => android/app/src/main/AndroidManifest.xml
  // <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  // <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  // and install rn-fetch-blob npm

  const checkPermission = async (name, url) => {
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      downloadImage(name, url);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          downloadImage(name, url);
        } else {
          // If permission denied then show alert
          Alert.alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };
  const downloadImage = (name, url) => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = url;
    // Getting the extention of the file
    let ext = getExtention(name, image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          // '/image_' +
          // Math.floor(date.getTime() + date.getSeconds() / 2) +
          '/' +
          name +
          ext,
        description: 'Image',
        name: name,
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        // alert('Image Downloaded Successfully.');
      });
  };
  const getExtention = (name, filename) => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  return (
    <AppThemeScreen>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.view}>
        <TouchableOpacity onPress={() => onShare()}>
          <AppText
            style={[
              styles.text,
              {color: isThemeDark ? 'white' : colors.light.primaryColorLight},
            ]}>
            # Share App
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => callNumber(8888888888)}>
          <AppText
            style={[
              styles.text,
              {color: isThemeDark ? 'white' : colors.light.primaryColorLight},
            ]}>
            # Call Number
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            checkPermission(
              'image',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            )
          }>
          <AppText
            style={[
              styles.text,
              {color: isThemeDark ? 'white' : colors.light.primaryColorLight},
            ]}>
            # Download Image
          </AppText>
        </TouchableOpacity>
      </ScrollView>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(15),
  },
  text: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: RFValue(16),
    marginTop: hp(12),
  },
});
