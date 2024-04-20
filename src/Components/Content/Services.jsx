import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="card-service wow fadeInUp">
              <div className="header">
                <img src="../img/services/28772962_7461487.svg" alt="" />
              </div>
              <div className="body">
                <h5 className="text-secondary">System Architecture</h5>
                <p>
                  We help you define your SEO objective &amp; develop a
                  realistic strategy with you
                </p>
                <Link to="sda" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-service wow fadeInUp">
              <div className="header">
                <img src="../img/services/25001216_7040861.svg" alt="" />
              </div>
              <div className="body">
                <h5 className="text-secondary">Fullstack Development</h5>
                <p>
                  We help you define your SEO objective &amp; develop a
                  realistic strategy with you
                </p>
                <Link to="fullstack" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-service wow fadeInUp">
              <div className="header">
                <img src="../img/services/25644111_7036170.svg" alt="" />
              </div>
              <div className="body">
                <h5 className="text-secondary">DevSecOps</h5>
                <p>
                  We help you define your SEO objective &amp; develop a
                  realistic strategy with you
                </p>
                <Link to="devsecops" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-service wow fadeInUp">
              <div className="header">
                <img
                  src="../img/services/12291385_Wavy_Tsp-04_Single-08.svg"
                  alt=""
                />
              </div>
              <div className="body">
                <h5 className="text-secondary">Automation</h5>
                <p>
                  We help you define your SEO objective &amp; develop a
                  realistic strategy with you
                </p>
                <Link to="automation" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/services">
          Know more of our services
          <span class="mai-chevron-forward text-sm"></span>
        </Link>
      </div>
    </div>
  );
};

export default Services;
