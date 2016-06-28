/**
 * @providesModule registerForPushNotificationsAsync
 */

import { NativeModules, Platform } from 'react-native';
const { ExponentNotifications } = NativeModules;

const PUSH_ENDPOINT = 'https://exponent-push-server.herokuapp.com/tokens';

export default async function registerForPushNotificationsAsync() {
  let token = await ExponentNotifications.getExponentPushTokenAsync();

  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: {
        value: token,
       }
    })
  })
}

// Push Notifications are not currently implemented on iOS! This will be
// available mid-July. The code below just provides a fake token for now.
if (Platform.OS === 'ios') {
  ExponentNotifications = {
    getExponentPushTokenAsync: async () => {
      return new Promise(resolve => resolve('fake-token'));
    }
  }
}
