import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
export default class Footer extends Component {
  handleDownload = () => {
    const storageRef = firebase
      .storage()
      .ref()
      .child("CV.pdf");

    storageRef.getDownloadURL();
  };

  render() {
    let resumeData = this.props.resumeData;
    const firebaseConfig = {
      apiKey: "AIzaSyBfkIfQGrcvdm2Vswpt6SDqG7IIwpANVtQ",
      authDomain: "romreactapp.firebaseapp.com",
      projectId: "romreactapp",
      storageBucket: "romreactapp.appspot.com",
      messagingSenderId: "1041977475214",
      appId: "1:1041977475214:web:c12d31aa855930efdb89df"
    };

    firebase.initializeApp(firebaseConfig);
    return (
      <footer style={{backgroundColor: "white"}}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li>
                      <a href={item.url} target="_blank">
                        {item.className === "fa fa-file-text" ? (
                          <i
                            className={item.className}
                            onClick={this.handleDownload}
                          />
                        ) : (
                          <i className={item.className} />
                        )}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
