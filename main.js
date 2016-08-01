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
import {
  Components,
} from 'exponent';
import {
  cacheImages,
  cacheFonts,
} from 'cacheHelpers';

import Router from 'Router';
import registerForPushNotificationsAsync from 'registerForPushNotificationsAsync';

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
    registerForPushNotificationsAsync();

    this._notificationSubscription = DeviceEventEmitter.addListener(
      'Exponent.notification', this._handleNotification
    );

    if (this.props.exp.notification) {
      this._handleNotification(this.props.exp.notification);
    }
  }

  componentWillUnmount() {
    this._notificationSubscription.remove();
  }

  render() {
    if (!this.state.appIsReady) {
      return <Components.AppLoading />;
    }

    return (
      <View style={styles.container}>
        <NavigationProvider router={Router}>
          <StackNavigation
            id="root"
            initialRoute={Router.getRoute('tabNavigationLayout')}
          />
        </NavigationProvider>

        {Platform.OS === 'ios' && <StatusBar barStyle="default" /> }
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
      </View>
    );
  }

  async _loadAssetsAsync() {
    let imageAssets = cacheImages([
      require('./assets/images/exponent-wordmark.png'),
      require('./assets/images/exponent-icon.png'),
      require('./assets/images/slack-icon.png'),
    ]);

    let fontAssets = cacheFonts([
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
