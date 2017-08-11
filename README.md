### Mobile app for Frappe Framework

This is a Cordova based container for Frappe Framework.

This provides local server selection, login and desk pages that will load application files (HTML/JS/CSS) from the server.

Compatible with Frappe version 6/7+

#### Requirements

Cordova

#### Install Platforms

```
$ cordova platform add ios
$ cordova platform add android
```

#### Install Plugins:

```
$ cordova plugin add cordova-plugin-statusbar
$ cordova plugin add cordova-plugin-inappbrowser
$ cordova plugin add cordova-plugin-file
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
