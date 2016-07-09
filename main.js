import React from 'react';
import {
  AppRegistry,
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
  }

  render() {
    let { exp: { manifest } } = this.props;

    return (
      <View style={styles.container}>
        <NavigationProvider router={Router}>
          <StackNavigation
            id="root"
            initialRoute={Router.getRoute('tabNavigationLayout', {manifest})}
          />
        </NavigationProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'ios' ? 0 : 24,
  },
});

AppRegistry.registerComponent('main', () => AppContainer);
