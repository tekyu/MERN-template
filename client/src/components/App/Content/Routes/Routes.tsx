import FullScreenLoader from "components/FullScreenLoader/FullScreenLoader";
import Home from "containers/Home/Home";
import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

interface IRoutes {
  auth: boolean
}

const Routes = ({ auth }: IRoutes) => {
  console.log(`[routes]`, auth)
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
