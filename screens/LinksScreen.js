import React from 'react';
import {
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';

import BrandedNavigationTitle from '../navigation/BrandedNavigationTitle';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
        <Text style={styles.optionsTitleText}>
          Resources
        </Text>

        <TouchableOpacity style={styles.optionsContainer} onPress={this._handlePressSlack}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/images/slack-icon.png')}
                fadeDuration={0}
                style={{width: 20, height: 20}}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                 Join us on Slack
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsContainer} onPress={this._handlePressDocs}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/images/exponent-icon.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{width: 20, height: 20, marginTop: 1}}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Read the Exponent documentation
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  _handlePressSlack = () => {
    Linking.openURL('https://slack.exponentjs.com');
  }

  _handlePressDocs = () => {
    Linking.openURL('http://docs.getexponent.com');
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.02)',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 15,
    marginTop: 2,
  },
});
