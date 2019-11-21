import React, { useState } from "react";
import "./App.css";
import { DigitalMenu } from "./components/DigitalMenu";

import queryString from "query-string";

class App extends React.Component {
  constructor(props) {
    super(props);
    let info = {};
    try {
      let qry = queryString.parse(window.location.search);
      let str = atob(qry.q);
      info = JSON.parse(str);
    } catch (e) {}
    this.state = info;
  }

  render() {
    return <DigitalMenu restId={this.state.restId} group={this.state.group} />;
  }
}

export default App;
