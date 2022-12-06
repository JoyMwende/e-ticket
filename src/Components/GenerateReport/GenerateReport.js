import React from "react";
import { Component } from "react";
import ReactToPrint from "react-to-print";
import Navbar from "../Navbar/Navbar";

class GenerateReport extends Component {
  // state = {  }
  constructor(props) {
    super(props);
    this.state = {
      isGen: false,
    };
    this.getRedirectButton = this.getRedirectButton.bind(this);
  }

  getRedirectButton = (e) => {};

  render() {
    return (
      <div className="generate-report">
        <div className="generate-nav">
          <Navbar />
        </div>
        <div className="generate-content">
          <button
            type="button"
            onClick={() => {
              this.setState({ isGen: true });
            }}
            className="generateRes"
          >
            Generate Report{" "}
          </button>

          {this.state.isGen ? (
            <div className="col-xl-4 col-lg-4 coin-distribution">
              <div className="col">
                {this.getRedirectButton()}
                <ReactToPrint
                  documentTitle={"All Reported Machines"}
                  onAfterPrint={() => {
                    this.setState({ isGen: false });
                  }}
                  trigger={() => {
                    return (
                      <button type="button" className="generateRes">
                        Generate PDF Now
                      </button>
                    );
                  }}
                  content={() => this.componentRef}
                />
              </div>
            </div>
          ) : (
            <div className="row text-end"></div>
          )}
        </div>
      </div>
    );
  }
}

export default GenerateReport;
