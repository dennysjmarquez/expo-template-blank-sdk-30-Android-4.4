import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import TabNavigationLayout from './TabNavigationLayout';

export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  tabNavigationLayout: () => TabNavigationLayout,
}));
