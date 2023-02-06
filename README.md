# React Native Basic UI Setup

## Demo App URL ( May not be up-to-date, Follow the below steps and run it in your local )

https://i.diawi.com/w87ZVp

## Features:

:white_check_mark: Splash Screen Image Upon Starting of Application 

:white_check_mark: Folder Architecture

:white_check_mark: Stack, Tab and Drawer Navigation

:white_check_mark: Stack Navigation Screens in Drawer Navigation ( Eg: Settings Tab)

:white_check_mark: Font and Size(height & width) Responsive Design for all mobile screens

:white_check_mark: Light and Dark Mode

:white_check_mark: SVG Images Rendering

:white_check_mark: Custom Bottom Tab Bar

:white_check_mark: Language Translation

:white_check_mark: Fixed Sub Tabs

:white_check_mark: Dynamic Sub Tabs

:white_check_mark: Added More Helpers ( Share, Call, Download etc)

:loop: Custom Dropdowns ( Coming soon... )

:loop: FAQ Collapse View ( Coming soon... )

:loop: Animations ( Coming soon... )

:loop: More features will be added soon...

## Step 1

npx react-native init CareerWill

## Step 2

```
npm i --save @react-native-masked-view/masked-view @react-navigation/native @react-navigation/stack  metro-config react-native-gesture-handler react-native-safe-area react-native-safe-area-context react-native-screens react-native-svg react-native-svg-transformer react-native-vector-icons react-native-iphone-x-helper  @react-native-async-storage/async-storage react-native-reanimated
```

**To support status bar in IOS devices use below NPM**

```
npm i rn-status-bar --save

```

**For Fixed Top Tab bar**

```
npm i --save react-native-pager-view @react-navigation/material-top-tabs

```

Home -> Fixed Tabs -> Select Fixed Tabs

**For Language Translation**

```
npm i --save i18next react-i18next react-native-localize

```

Langauge -> Choose Language

## Step 3

**Copy assets/fonts from root**

Add below lines in babel.config.js

```
  plugins: [
    'react-native-reanimated/plugin',
  ],
```

**to support SVG icons replace metro.config.js file with below**

```
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
 const {
   resolver: { sourceExts, assetExts },
 } = await getDefaultConfig();

 return {
   transformer: {
     babelTransformerPath: require.resolve('react-native-svg-transformer'),
     getTransformOptions: async () => ({
       transform: {
         experimentalImportSupport: false,
         inlineRequires: false,
       },
     }),
   },
   resolver: {
     assetExts: assetExts.filter(ext => ext !== 'svg'),
     sourceExts: [...sourceExts, 'svg'],
   },
 };
})();

module.exports = {
 transformer: {
   getTransformOptions: async () => ({
     transform: {
       experimentalImportSupport: false,
       inlineRequires: true,
     },
   }),
 },
};
```

**For Fonts add react-native.config.js in root and copy below**

```
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
};
```

and add

```
npx react-native-asset
```

to add fonts to android/IOS

## Step 4

npx react-native assest ( to added fonts to android/ios )

cd/ios - pod install

## Step 5

npm run-android

npm run ios

## For Splash Screen

- Convert your icons in to different sizes using https://www.appicon.co/
- replace this images with android/app/src/main/res images ( Folder name starts with **mipmap** )
- Update Your App Name in android/app/src/main/res/values/string.xml
- Create color.xml file and paste below in android/app/src/main/res/values

```
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!--   color for the app bar and other primary UI elements -->
    <color name="colorPrimary">#FFFFFF</color>
    <color name="colorPrimaryDark">#A52D53</color>
    <color name="splashscreen_background">#FFFFFF</color>
    <color name="colorAccent">#FFFFFF</color>
</resources>

```

- Create background_splash.xml file and paste below in android/app/src/main/res/drawable

```
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@color/colorPrimary"/>
    <item>
        <bitmap
            android:gravity="center"
            android:src="@mipmap/ic_launcher"/>
    </item>
</layer-list>

```

- Create splashscreen.xml file and paste below in android/app/src/main/res/drawable

```
<?xml version="1.0" encoding="utf-8"?>

<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@color/splashscreen_background"/>
    <item>
        <bitmap
            android:gravity = "center"
            android:src="@mipmap/ic_launcher"/>
    </item>
</layer-list>

```

- Import above in android/app/src/main/AndroidManifest.xml in activity

```
<activity
...
android:theme="@style/SplashTheme"
>
```

- Add Below in android/app/src/main/res/values/styles.xml under resourses

```
<resources>
...
 <style name="SplashTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
    <item name="android:windowBackground">@drawable/splashscreen</item>
            <item name="android:windowDisablePreview">true</item>
    </style>
</resources>
```

## Light Mode

<img src="/screenshots/1.png" width="300px"></img>
<img src="/screenshots/2.png" width="300px"></img>
<img src="/screenshots/3.png" width="300px"></img>
<img src="/screenshots/4.png" width="300px"></img>
<img src="/screenshots/5.png" width="300px"></img>
<img src="/screenshots/6.png" width="300px" ></img>

## Dark Mode

<img src="/screenshots/7.png" width="300px" ></img>
<img src="/screenshots/8.png" width="300px" ></img>
