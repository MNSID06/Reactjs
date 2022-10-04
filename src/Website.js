/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import top from "./images/frontendtop.png";
import body from "./images/frontendbody.png";
import user from "./images/frontenduser.png";
import footer from "./images/frontendfooter.png";
import { Col } from "antd";

class Website extends Component {
  render() {
    return (
      <Col>
        <img className="picture1" src={top} />
        <hr className="line"></hr>
        <img classname="picture2" src={user} />
        <img className="picture3" src={body} />
        <div className="content">
          <p>hey guys, What's up! 🥳</p>
          <p>This UI demonstrates the workflow of the website</p>

          <p>Let's create something amazing together! 🧑‍🎨</p>
          <p>to contact me - ertuken@gmail.com</p>
        </div>
        <img className="picture4" src={footer} />
      </Col>
    );
  }
}

export default Website;
