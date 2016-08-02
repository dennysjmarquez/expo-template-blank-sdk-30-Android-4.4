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
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        { /* Go ahead and delete ExponentConfigView and replace it with your
           * content, we just wanted to give you a quick view of your config */ }
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
