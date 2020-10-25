import React from 'react';
import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import MainLayout from './layout/MainLayout';
import theme from 'theme';
import Users from 'components/Users/Users';
import UserDetail from 'components/UserDetail';
import Resources from 'components/Resources/Resources';
import ResourceDetail from 'components/ResourceDetail/ResourceDetail';
import AddUser from 'components/AddUser/AddUser';
import EditUser from 'components/EditUser/EditUser';
import Auth from 'pages/Auth/Auth';
import history from 'helpers/history';
import { SnackbarProvider } from 'notistack';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={5}
          autoHideDuration={2000}
          variant="success"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <CssBaseline />
          <Switch>
            <Route exact path="(/|/auth)" component={Auth} />
            <Route>
              <MainLayout>
                <Switch>
                  <Route exact path="/users" component={Users} />
                  <Route exact path="/users/:id" component={UserDetail} />
                  <Route exact path="/resources" component={Resources} />
                  <Route exact path="/resources/:id" component={ResourceDetail} />
                  <Route exact path="/add" component={AddUser} />
                  <Route exact path="/edit/:id" component={EditUser} />
                </Switch>
              </MainLayout>
            </Route>
          </Switch>
          </SnackbarProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
