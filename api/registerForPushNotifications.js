/**
 * @providesModule registerForPushNotificationsAsync
 */

import {
  Platform,
} from 'react-native';
import {
  Notifications,
} from 'exponent';

const PUSH_ENDPOINT = 'https://exponent-push-server.herokuapp.com/tokens';

export default async function registerForPushNotificationsAsync() {
  // Push Notifications are not implemented on iOS yet! This will be available
  // mid-July. For now we just skip it.
  if (Platform.OS === 'ios') {
    return;
  }

  let token = await Notifications.getExponentPushTokenAsync();

  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
       },
    }),
  });
}
