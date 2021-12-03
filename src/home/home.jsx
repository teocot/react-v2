import React from 'react'
import { Icon } from "@iconify/react";

class Home extends React.Component {
    render() {
     return(
       <div>
            <h1>Hello homyer, {this.props.name}</h1>;
            <Icon icon="mdi-light:home" height="200px" width="220px" />
            <Icon icon="fa-solid:car" height="200px" width="220px" />
            <Icon icon="mdi-light:home" height="200px" width="220px" />
        </div>
     );
    }
  }

  export default Home;