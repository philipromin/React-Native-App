import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';

import Layout from './components/layout';
import RootReducer from './reducers';
import AppContainer from 'navigation/containers';
import apiConfig from './api';


export default class App extends Component {
  componentWillMount() {
    const config = apiConfig;
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(RootReducer, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Layout>
            <AppContainer />
          </Layout>
      </Provider>
    );
  }
}

