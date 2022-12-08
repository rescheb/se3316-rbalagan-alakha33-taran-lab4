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
import DcmaNotice from "./PublicDmcaNotice";
import PrivatePlaylist from "./PrivatePlaylist";
import PublicDmca from "./PublicDmca";
import DmcaNotice from "./PublicDmcaNotice";
import Admin from "./Admin";
import Aup from "./Aup";
import AdminRoute from "./AdminRoute";
import PrivateDmca from "./PrivateDmca";
import Options from "./Options";

//setting up the login functionality
function App() {
  return (
    <div className="main" style={{ maxWidth: "10000px" }}>
      <Container className="d-flex align-items-center justify-content-center">
        <div className="w-100">
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute
                  path="/AuthenticatedUser"
                  component={AuthenticatedUser}
                />
                <PrivateRoute path="/privatePlaylist" component={PrivatePlaylist} />
                {/* <PrivateRoute path="/dmca" component={DmcaNotice} /> */}
                <Route path="/dmcanotice" component={PrivateDmca} />
                <PrivateRoute
                  path="/AuthenticatedUser"
                  component={AuthenticatedUser}
                />
                {/* <Route path = "/dmcanotice" component = {PublicDmca}/> */}
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/playlist" component={Playlist} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/frontend" component={Frontend} />
                <Route path="/privatedmca" component={PublicDmca} />
                <Route path="/admin" component={Admin} />
                <Route path="/aup" component={Aup} />
                <Route path="/options" component={Options} />
                {/* <Route path = "privateDmca" ><AdminRoute/></Route> */}
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
