import React, { Component } from "react";
import { signInWithGoogle, isLogged, currentUser } from "../services/firebase";
import GoogleButton from "react-google-button";
export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: isLogged,
      currentUser: currentUser,
    };
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" style={{backgroundColor: "darkgrey"}}>
        <div className="row">
          <div className="nine columns main-col">
            <h2>A propos</h2>
            <p style={{color: "white"}}>{resumeData.aboutme}</p>
          </div>
        </div>

        <div
        id="top"
        style={{
          width: "20%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        >
        <GoogleButton
          type="light"
          onClick={signInWithGoogle}
          style={{ width: "100%" }}
          label={this.state.isLogged ? "Logged" : "Sign in with Google"}
          />
        </div>
      </section>
    );
  }
}
