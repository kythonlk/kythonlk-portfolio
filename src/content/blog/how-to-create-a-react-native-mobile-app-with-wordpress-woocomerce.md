---
title: 'Building a Real-Time Application with '
pubDate: 'Saturday, January 1, 2025'
heroImage: '/data/post-2-image.jpg'
---

# So You Wanna Build a React Native App? Let's Woo-Commerce it Up! 🎉

Hey there, code wizard! Ready to dip your toes into the magical waters of React Native and WooCommerce? Sweet. Let's build a totally rad app with a products page that screams, "I’m a Gen Z developer, and I’m here to slay!"

**Warning**: This tutorial will include vibes, memes, and code. Buckle up.

---

## Step 1: Prep the Playground 

First things first. Install React Native because, duh, we need it.

```bash
npx react-native init WooApp --template react-native-template-typescript
```

Now that we’re official React Native devs (kind of), let’s make sure your environment is as spotless as your For You Page:

- **Node.js**: Make sure it's installed. If not, go to [Node.js downloads](https://nodejs.org) and get the latest LTS.
- **Expo Go (optional)**: You love easy stuff? Use Expo. 
- **Java (optional)**: The Java SDK is required for Android builds.
- **Android SDK (optional)**: The Android SDK is required for Android builds.
- **Android Studio (optional)**: The Android Studio is required for Android builds.
- **Xcode (optional)**: The Xcode is required for iOS builds.
- **Cocoapods (optional)**: The Cocoapods is required for iOS builds.

```bash
npx create-expo-app WooApp
```

---

## Step 2: WooCommerce API: The Holy Grail 🛍️

Before you code, grab your WooCommerce store’s API keys. Don’t have a store? Create one (or borrow your cousin’s). You’ll need:

- **Consumer Key**
- **Consumer Secret**

Now, let’s install the official WooCommerce REST API client:

```bash
npm install @woocommerce/woocommerce-rest-api
```

Create a `config.ts` to keep things tidy:

```typescript
import { WooCommerceAPI } from '@woocommerce/woocommerce-rest-api';

export const WooCommerce = new WooCommerceAPI({
  url: 'https://yourstore.com',
  consumerKey: 'ck_your_key',
  consumerSecret: 'cs_your_secret',
  version: 'wc/v3',
});
```

---

## Step 3: The App Skeleton 💀

We’re building a products page, fam. Let’s map this out:

1. **Home Screen**: Keep it simple.
2. **Products Page**: Load products from WooCommerce.
3. **Product Details**: Show more info when clicked.

### Create Your Pages

Make a directory called `screens` and start whipping up files:

```bash
mkdir screens && cd screens
```

- **HomeScreen.ts**
- **ProductsScreen.ts**
- **ProductDetailScreen.ts**

Example starter code for HomeScreen:

```typescript
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to WooApp! 🛍️</Text>
      <Button
        title="View Products"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

```

---

## Step 4: Fetch All the Things! 🔄

In `ProductsScreen.ts`, connect to WooCommerce and fetch the goods.

```typescript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { WooCommerce } from '../config';

export default function ProductsScreen() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    WooCommerce.get('products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Products 🛒</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.productName}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    marginVertical: 5,
  },
});

```

---

## Step 5: Add Navigation 🚀

React Navigation is a no-brainer. Install it:

```bash
npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-stack
```

Wire it up in `App.ts`:

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
```

---

## Step 6: Test Like It’s Hot 🔥

Fire up the dev server:

```bash
npx react-native start
```

---

## Step 7: Testing Your React Native App 🧪

Testing is key to making sure your app doesn’t crash like your Wi-Fi during a Zoom call. Let’s add some tests using **Jest** and **React Native Testing Library**.

### Install Testing Dependencies

```bash
npm install --save-dev jest @testing-library/react-native react-test-renderer
```

Update your `package.json` to include a test script:

```json
"scripts": {
  "test": "jest"
}
```

### Writing a Test

Create a `__tests__` folder in your project and add a test for the HomeScreen:

```javascript
import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

test('HomeScreen renders correctly', () => {
  const { getByText } = render(<HomeScreen />);
  expect(getByText('Welcome to WooApp! 🛍️')).toBeTruthy();
});
```

### Run Tests

Run the tests with:

```bash
npm test
```

Boom! Your app is now tested and ready to impress.

