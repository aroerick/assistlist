import React, { Component } from 'react';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import SplashScreen from 'react-native-splash-screen';
import createRootNavigator from './navigation/RootStackNavigation';
import { getUser } from './config/models';
// import addItem from '../js/screens/CreateItem'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
    let currentUser = false;
    getUser().map(user => (currentUser = user));
    if (currentUser) this.setState({ signedIn: true });
  }

  render() {
    const Layout = createRootNavigator(this.state.signedIn);
    return (
      <ApolloProvider client={client}>
        <Layout />
        {/* <addItem /> */}
      </ApolloProvider>
    );
  }
}
