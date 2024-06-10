# Mixpanel Integration for React Application

This guide details the steps to set up and configure Mixpanel in your React application.

## 1. Sign Up for Mixpanel

If you don't already have a Mixpanel account, go to [Mixpanel's website](https://mixpanel.com/) and sign up for an account.

## 2. Create a New Project

Once you have an account and are logged in:
### Navigate to the Project Settings:

1. Click on your account name in the top right corner.

### Create a New Project:

1. Click on the "Create New Project" button.
2. Enter a name for your project and select the appropriate options for your project type (e.g., web, mobile).
3. Click "Create Project".

## 3. Get Your Project Token

After creating your project:

### Locate Your Project Token:

1. In the project settings, you will see the "Access Keys" section.
2. Your project token will be listed there. This token is required for initializing Mixpanel in your application.

## 4. Set Up Mixpanel in Your React Application

### Install Mixpanel SDK:

```sh
npm install mixpanel-browser
 or
yarn add mixpanel-browser

```

**Mixpanel Integration Guide for React Applications**

---

This guide will walk you through the process of integrating Mixpanel into your React application to track user interactions and gather valuable analytics data. Follow these steps to configure Mixpanel and start tracking events, user identification, page views, and more.

### 1. Initialize Mixpanel

```javascript
import mixpanel from 'mixpanel-browser';

mixpanel.init('YOUR_MIXPANEL_PROJECT_TOKEN');
```

Replace `'YOUR_MIXPANEL_PROJECT_TOKEN'` with the actual token obtained from the project settings in your Mixpanel dashboard.

### 2. Configure Event Tracking and User Identification

**Track Events**

```javascript
mixpanel.track('Event Name', {
  property1: 'value1',
  property2: 'value2'
});
```

**Identify Users**

```javascript
mixpanel.identify('USER_ID');
mixpanel.people.set({
  $email: 'user@example.com',
  $first_name: 'John',
  $last_name: 'Doe'
});
```

**Track Page Views**

```javascript
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    mixpanel.track('Page View', {
      page: location.pathname
    });
  }, [location]);
};

const App = () => {
  usePageTracking();

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
```

### 3. Advanced Configuration

**Set Super Properties**

```javascript
mixpanel.register({
  referrer: document.referrer,
  'User Type': 'Free'
});
```

**Track Revenue**

```javascript
mixpanel.people.track_charge('USER_ID', 29.99, {
  $time: new Date().toISOString()
});
```

### 4. Verify the Integration

Ensure your integration is working by checking the Live View in your Mixpanel project:

1. Navigate to the Live View:
   - Go to your project dashboard.
   - Click on "Live View" in the left-hand menu.

2. Verify Events:
   - Trigger some events in your application.
   - Check if they appear in the Live View.

### 5. Secure Your Configuration

Ensure sensitive information such as your Mixpanel token is not exposed in your source code by using environment variables:

1. Create an `.env` file:

```
REACT_APP_MIXPANEL_TOKEN=your_mixpanel_token
```

2. Use the Environment Variable in Your Code:

```javascript
mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);
```

3. Add `.env` to `.gitignore`:

```
.env
```

By following these steps, you'll have a Mixpanel project configured and integrated with your React application, allowing you to track user interactions and gather valuable analytics data. For more detailed configurations and advanced features, refer to the Mixpanel documentation.

---# mixpanel-integration
