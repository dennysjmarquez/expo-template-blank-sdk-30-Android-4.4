/** In order for logging to stream to XDE or the exp CLI you must import the
  * exponent module at some point in your app */
import * as Exponent from 'exponent';

import React from 'react';
import {
  AppRegistry,
  DeviceEventEmitter,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Router from './navigation/Router';

import registerForPushNotificationsAsync from './api/registerForPushNotificationsAsync';
import {
  cacheImages,
  cacheFonts,
} from './utilities/cacheHelpers';


class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    // Cache important assets like fonts and logo images
    this._loadAssetsAsync();

    // Send our push token over to our backend so we can receive notifications
    registerForPushNotificationsAsync();

    // If we started the app from a push notification, handle it right away
    if (this.props.exp.notification) {
      this._handleNotification(this.props.exp.notification);
    }

    // Handle notifications that come in while the app is open
    this._notificationSubscription = DeviceEventEmitter.addListener(
      'Exponent.notification', this._handleNotification
    );
  }

  componentWillUnmount() {
    this._notificationSubscription.remove();
  }

  render() {
    if (!this.state.appIsReady) {
      return <Exponent.Components.AppLoading />;
    }

    return (
      <View style={styles.container}>
        <NavigationProvider router={Router}>
          <StackNavigation
            id="root"
            initialRoute={Router.getRoute('tabNavigationLayout')}
          />
        </NavigationProvider>

        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
      </View>
    );
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/exponent-wordmark.png'),
      require('./assets/images/exponent-icon.png'),
      require('./assets/images/slack-icon.png'),
    ]);

    const fontAssets = cacheFonts([
      FontAwesome.font,
    ]);

    await Promise.all([
      ...imageAssets,
      ...fontAssets,
    ]);

    this.setState({appIsReady: true});
  }

  _handleNotification = (notification) => {
    console.log({notification});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

AppRegistry.registerComponent('main', () => AppContainer);
