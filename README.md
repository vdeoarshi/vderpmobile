### Mobile app for Frappe Framework

#### Install Platforms

```
$ cordova platform add ios
$ cordova platform add android
```

#### Install Plugins:

```
$ cordova plugin add cordova-plugin-statusbar
$ cordova plugin add cordova-plugin-inappbrowser
```

#### Build iOS

Install and update the latest XCode

```
$ cordova build ios && cordova emulate ios && open -a "ios simulator"
```

Release for iOS is via XCode

#### Build Android

Install Android SDK

Tip: Try Android Studio

```
$ cordova build android
$ cordova build android --release
```

#### Adding Android Keys

Update your android keys to `build.json`

#### License

MIT