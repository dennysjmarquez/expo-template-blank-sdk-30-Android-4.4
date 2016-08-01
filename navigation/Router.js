/**
 * @providesModule Router
 */

import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from 'HomeScreen';
import LinksScreen from 'LinksScreen';
import TabNavigationLayout from 'TabNavigationLayout';

export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  tabNavigationLayout: () => TabNavigationLayout,
}));
