import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { configureStore } from "../../util/store";
import { createTheme } from "../../theme";
import Layout from '../layout';
import Body from '../body';

class App extends Component {
  constructor(props) {
    super(props);

    // grab the state from a global variable injected into the server-generated HTML
    const preloadedState = window.__PRELOADED_STATE__;

    // allow the passed state to be garbage-collected
    // delete window.__PRELOADED_STATE__;

    this.store = configureStore(preloadedState);
  }


  render() {
    return (
      <Provider store={this.store}>
        <div>
          <ThemeProvider theme={createTheme()}>
            <BrowserRouter>
              <Layout>
                <Body />
              </Layout>
            </BrowserRouter>
          </ThemeProvider>
        </div>
      </Provider>
    );
  }
}

export default App;