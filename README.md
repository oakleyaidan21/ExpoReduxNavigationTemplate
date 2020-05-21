# ExpoReduxNavigationTemplate

Starter code for an expo project using redux and navigation

## Set Up

After cloning the repo, make sure to delete the `.git` folder from the root directory. Then, initialize your own git directory using `git init`.

Then, change the application's `name` and `slug` properties in `app.json` to whatever you want.

Now your project should be unique.

Run `npm install` and `expo start` in order to start running the project

## Basic Usage

A common use case for mobile apps is to have two sides to an app: an unauthorized section and an authorized section.

Usually, the flow goes:

1. App Loads
2. Checks persisting storage for an authenticated user
  - if one exists, show the authorized side of the app
  - if one does not exist, show the unauthorized side

This template facilitates this flow.

### Navigation

You can find the beginnings of the two navigators in the `navigation` folder. In order to add more screens and facilitate their navigation, you can look at the documentation [here](https://reactnavigation.org/docs/getting-started). Here's a simple example of how to add another screen:

1. Create the screen file as a react component, as shown in `Home.js`, i.e. `Welcome.js`:

```js
import React, { Component } from "react";
import { View, Text } from "react-native";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Welcome!!!</Text>
      </View>
    );
  }
}

export default Welcome;
```

2. Import this component into `authorizedNavigator.js`
3. Add it to the stack navigator object, like so:

```js
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";

const AuthorizedNavigator = createAppContainer(
  createStackNavigator({
    Home: { screen: Home },
    Welcome: { screen: Welcome }, //<--- the new screen
  })
);

export default AuthorizedNavigator;
```

### Redux

There are two reducers this template uses: a persisting reducer and a session reducer.

The persisting reducer will take care of saving data to local storage for you, and the data saved will persist through app closures.

The session reducer is for temporary data that doesn't need to be saved over closures, but still needs to be used throughout the application.
