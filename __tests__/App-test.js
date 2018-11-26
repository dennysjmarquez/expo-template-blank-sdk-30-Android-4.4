import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import { _TESTING_ONLY_reset_container_count } from '@react-navigation/native/src/createAppContainer';

describe('App snapshot', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    _TESTING_ONLY_reset_container_count();
  });

  it('renders the loading screen', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the root without loading screen', async () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
