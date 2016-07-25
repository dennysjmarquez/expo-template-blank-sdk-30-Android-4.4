import React from 'react';
import {
  AppRegistry,
  DeviceEventEmitter,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import Router from 'Router';
import registerForPushNotificationsAsync from 'registerForPushNotificationsAsync';

class AppContainer extends React.Component {

  componentWillMount() {
    registerForPushNotificationsAsync();

    // This fires at different times for iOS and Android.
    //
    // iOS - if app is foregrounded, immediately upon delivery. Otherwise,
    // when the notification is tapped.
    //
    // Android - only when the notification is tapped.
    //
    this._notificationSubscription = DeviceEventEmitter.addListener(
      'Exponent.notification', (notification) => {
        console.log({notification});
      }
    );
  }

  componentWillUnmount() {
    this._notificationSubscription.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationProvider router={Router}>
          <StackNavigation
            id="root"
            initialRoute={Router.getRoute('tabNavigationLayout')}
          />
        </NavigationProvider>

        { Platform.OS === 'android' && <View style={styles.statusBarUnderlay} /> }
      </View>
    );
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
