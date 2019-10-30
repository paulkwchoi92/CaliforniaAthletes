import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          {/* <AuthRoute exact path="/" component={MainPage} />
          <ProtectedRoute
            path="/profile/:username"
            component={ProfileContainer}
          />
          <ProtectedRoute
            exact
            path="/pin-creator"
            component={PinCreatorContainer}
          />
          <ProtectedRoute
            exact
            path="/board/:boardid"
            component={BoardShowContainer}
          />
        </Switch>
        <Route path="/home" component={HomeContainer} />
        <Route exact path="/request-feature" component={RequestFeature} />
        <Route exact path="/project-details" component={ProjectDetails} />
        <ProtectedRoute path="/pins/:id" component={PinShowContainer} />
        <ProtectedRoute
          exact={false}
          path="/settings/edit-profile"
          component={EditProfile} */}
        />
      </div>
    );
  }
}

export default App;
