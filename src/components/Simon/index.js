import React, { useState } from 'react';
import './index.css';

const Simon = () => {
const { Component } = React;


class Control extends Component {
  render() {
    return <div className={this.props.name}></div>;
  }
}

class Color extends Component {
  render() {
    return <div className={this.props.name}></div>;
  }
}
    return (
      <div className={"flex-container"}>
        <Color name={"colors t-l"} />
        <Color name={"colors t-r"} />
        <Color name={"colors b-l"} />
        <Color name={"colors b-r"} />
        <Control name={"center"} />
      </div>
    );
}




  

export default Simon
