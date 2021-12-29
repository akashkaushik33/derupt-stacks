import { AppConfig, UserSession, showConnect } from '@stacks/connect';

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

export function authenticate() {
  showConnect({
    appDetails: {
      name: 'Derupt',
      icon: window.location.origin + '/favicon.png',
    },
    redirectTo: '/home',
    onFinish: () => {
      window.location.reload();
    },
    userSession: userSession,
  });
}

export function logout() {
  userSession.signUserOut(window.location.origin);
}

export function getUserData() {
  return userSession.loadUserData();
}