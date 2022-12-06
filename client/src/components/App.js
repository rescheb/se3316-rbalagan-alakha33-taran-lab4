import React from "react";
import Signup from "./SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Playlist from "./Playlist";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UnauthenticatedUser from "./UnauthenticatedUser";
import Frontend from "./Frontend";
import AuthenticatedUser from "./AuthenticatedUser";
import DcmaNotice from "./DmcaNotice";
import PrivatePlaylist from "./PrivatePlaylist";
import PublicDmca from "./PublicDmca";

//setting up the login functionality
function App() {
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute  path="/AuthenticatedUser" component={AuthenticatedUser} />
                <Route path = "/dmcanotice" component = {DcmaNotice}/>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/playlist" component={Playlist} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/UnauthenticatedUser" component={UnauthenticatedUser}/>
                <Route path="/frontend" component={Frontend} />
                <Route path = "/publicdmca" component = {PublicDmca}/>
                <Route path = "/privatePlaylist" component = {PrivatePlaylist}/>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
