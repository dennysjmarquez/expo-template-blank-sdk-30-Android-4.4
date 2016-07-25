/**
 * @providesModule Router
 */

import {
  createRouter,
} from '@exponent/ex-navigation';

import ConfigScreen from 'ConfigScreen';
import LinksScreen from 'LinksScreen';
import TabNavigationLayout from 'TabNavigationLayout';

export default createRouter(() => ({
  home: () => ConfigScreen,
  links: () => LinksScreen,
  tabNavigationLayout: () => TabNavigationLayout,
}));
