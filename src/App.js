import React, { Component } from "react";
import { Route, Switch } from "react-router";
import BurgerBuilder from "./conatiners/burgerbuilder/BurgerBuilder";
import Checkout from "./conatiners/Checkout/Checkout";
import Orders from "./conatiners/Orders/Orders";

import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
