import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Header from './common/Header';
import './App.css';
import Home from './home';
import CreateList from './createList';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e91e63'
    },
    secondary: {
      main: '#00b0ff',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/lista" component={CreateList} />
            </Switch>
          </div>
        </Router>

      </MuiThemeProvider>

    );
  }
}

export default App;
