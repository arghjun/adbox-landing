import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Code from "./components/Code.jsx";
import Icons from "./components/Icons.jsx";

import "react-awesome-button/dist/styles.css";
import "./App.css";



const App = () => (
  <div className="main">
    <div className="container">
      <Parallax strength={500}>
        <div style={{ height: 500 }}>
          <div className="boxs header">
            <h1 className="title">adbox</h1>
            <h4 className="introduction">
              adbox lets you stream digital ads in physical places, allowing monetization anywhere at anytime
            </h4>
            <h4>
              reach out to us for more info here
            </h4>
            <div className="buttons">
            <a href="https://arjunduraivenkatesh.typeform.com/to/vasyoZFx">
              <AwesomeButton
                size="medium"
                type="secondary"
              >
                advertisers
              </AwesomeButton>
            </a>
            <div className="space"></div>
            <a href="https://arjunduraivenkatesh.typeform.com/to/DrOnir">
              <AwesomeButton
                size="medium"
                type="primary"
              >
                locations/people
              </AwesomeButton>
              </a>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  </div>
);

export default App;
