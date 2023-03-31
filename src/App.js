import React, { Component } from "react";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
