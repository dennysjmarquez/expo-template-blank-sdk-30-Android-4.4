/**
 * @providesModule HomeScreen
 */

import React, {
  PropTypes,
} from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  ExponentConfigView,
} from '@exponent/samples';

import BrandedNavigationTitle from 'BrandedNavigationTitle';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      renderTitle: () => <BrandedNavigationTitle />,
    },
  }

  render() {
    const { route } = this.props;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={route.getContentContainerStyle()}>
        <ExponentConfigView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
