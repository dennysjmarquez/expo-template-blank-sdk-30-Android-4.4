/**
 * @providesModule BrandedNavigationTitle
 */

import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/exponent-wordmark.png')}
        style={{ width: 109, height: 19 }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
