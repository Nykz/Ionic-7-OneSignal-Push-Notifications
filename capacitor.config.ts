import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.technyks.testOneSignalNotifications',
  appName: 'onesignal-push-notification',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  ios: {
    // ... additional configuration
    handleApplicationNotifications: false
  }
};

export default config;
