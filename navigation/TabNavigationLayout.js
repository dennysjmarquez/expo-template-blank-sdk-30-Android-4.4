/**
 * @providesModule TabNavigationLayout
 */

import React, { PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Colors from 'Colors';
import Router from 'Router';

const defaultRouteConfig = {
  navigationBar: {
    translucent: Platform.OS === 'ios',
  },
};

export default class TabNavigationLayout extends React.Component {
  render() {
    return (
      <TabNavigation
        translucent
        tabBarHeight={56}
        initialTab="home">
        <TabNavigationItem
          id="home"
          renderIcon={isSelected => this._renderIcon('cog', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('home')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="links"
          renderIcon={isSelected => this._renderIcon('book', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('links')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="other-a"
          renderIcon={isSelected => this._renderIcon('ban', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('links')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="other-b"
          renderIcon={isSelected => this._renderIcon('ban', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('links')}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
});
