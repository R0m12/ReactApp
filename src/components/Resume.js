import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div style={{ display: "flex"}}>
            &nbsp;
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div>
                    <div>
                      <h3> {item.UniversityName} </h3>
                      <p className="info" style={{ fontSize: 12}}>
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                    <p style={{width: "55rem"}}>&nbsp;</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns">
            <h1>
              <span>Expérience</span>
            </h1>
          </div>

          <div style={{ display: "flex"}}>
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info" style={{ fontSize: 12}}>
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date" style={{ fontSize: 12}}>
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                    <p style={{width: "55rem"}}>&nbsp;</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row">
          <div className="three columns">
            <h1>
              <span>Capacités</span>
            </h1>
          </div>

          <div>
            <ol className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item) => {
                  return (
                    <li style={{border: 0}}>
                      <span style={{color: 'black', fontWeight: 'bold', fontStyle: 'italic'}}>{item.skillname}</span>
                    </li>
                  );
                })}
            </ol>
          </div>
        </div>
      </section>
    );
  }
}
