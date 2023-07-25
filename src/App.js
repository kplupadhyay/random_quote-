import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    // console.log("COMPONENT DID MOUNT");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("	https://api.adviceslip.com/advice")
      .then((response) => {
        // console.log(response.data.slip.advice);
        const { advice } = response.data.slip;
        // console.log(advice);
        this.setState({ advice });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="first">
        <div className="second">
          <h1 className="main">{advice}</h1>;
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
