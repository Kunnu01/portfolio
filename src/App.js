import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, MainPage, ProjectsPage } from './Components';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { darkTheme, lightTheme } from './theme/theme';
import './App.css';
// import { Typography } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightTheme: false,
    }
  }

  handleThemeSwitch = () => {
    const { isLightTheme } = this.state;
    this.setState({
      isLightTheme: !isLightTheme,
    })
  }
  
  render() {
    const { isLightTheme } = this.state;
    const portfolioTheme = isLightTheme ? lightTheme : darkTheme;
    return (
      <>
        <div className="App">
          <MuiThemeProvider theme={portfolioTheme}>
            {/* <CssBaseline /> */}
            <Router>
                <NavBar isLightTheme={isLightTheme} handleSwitch={this.handleThemeSwitch} />
              <Switch>
                <main
                  style={isLightTheme ? lightTheme.palette.mainPage : darkTheme.palette.mainPage}
                >
                  <Route exact path="/" component={MainPage} />
                  <Route path="/projects" component={ProjectsPage} />
                </main>
              </Switch>
            </Router>
          </MuiThemeProvider>
        </div>
      </>
    )
  }
}

export default App;
