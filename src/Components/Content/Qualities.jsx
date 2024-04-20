import React from "react";
import { Link } from "react-router-dom";

export const Qualities = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="text-center">
          <div className="subhead">Our Capabilities</div>
          <h2 className="title-section">
            What sets us apart from competetion?
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div className="text-center">
              <div className="img-fluid mb-4">
                <img
                  src="../img/services/12083676_Wavy_Bus-32_Single-01.svg"
                  alt=""
                />
              </div>
              <h5>Proven Success Results</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div className="text-center">
              <div className="img-fluid mb-4">
                <img
                  src="../img/services/12290869_Wavy_Tech-08_Single-10 (1).svg"
                  alt=""
                />
              </div>
              <h5>Cross-functional DevSecOps Teams</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div className="text-center">
              <div className="img-fluid mb-4">
                <img
                  src="../img/services/12290893_Wavy_Tech-10_Single-10.svg"
                  alt=""
                />
              </div>
              <h5>Cost effective solutions with emphasis on MVP</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div className="text-center">
              <div className="img-fluid mb-4">
                <img src="../img/services/10297056_4400255.svg" alt="" />
              </div>
              <h5>Commitment to quality</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
