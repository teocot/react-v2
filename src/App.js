import React from "react";

import { Icon } from "@iconify/react";
import Home from "./home/home";

function App() {
  return (
    <div className="App">
      <div>
        <Home name="Sara" />
      </div>
      <div>
        <Icon icon="fa-solid:car" height="100px" width="100px" />
        <Icon icon="fa-solid:home" height="100px" width="100px" />
        <Icon icon="fa-solid:car" height="100px" width="100px" />
      </div>
      <div>
        <Home name="Bena" />
      </div>
    </div>
  );
}

export default App;
