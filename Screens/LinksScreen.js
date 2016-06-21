/**
 * @providesModule LinksScreen
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import BrandedNavigationTitle from 'BrandedNavigationTitle';

export default class LinksScreen extends React.Component {

  static route = {
    navigationBar: {
      renderTitle: () => <BrandedNavigationTitle />
    },
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.optionsTitleText}>
          Resources
        </Text>

        <TouchableOpacity style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <View style={{width: 20, height: 20}} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                 Join us on Slack
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <View style={{width: 20, height: 20}} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Read the Exponent documentation
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <View style={{width: 20, height: 20}} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Explore the Exponent API Showcase
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionsContainer: {
    // ...
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  option: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.02)',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 15,
  },
});
