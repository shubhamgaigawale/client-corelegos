import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="page-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3 wow fadeInUp">
            <span className="subhead">About us</span>
            <h2 className="title-section">Delivering Next Gen Solutions</h2>
            <div className="divider" />
            <p>
              CoreLogos, a woman-owned small business headquartered in Fairfax,
              Virginia, is your dedicated ally in achieving excellence. With a
              journey spanning 13 years, we began by honing IT skills and
              training professionals in cutting-edge technologies. Today, we are
              your go-to solution architects, transforming concepts into digital
              realities for both government and private sectors.
            </p>
            <p>
              CoreLogos excels in IT systems architecture, platform automation,
              DevSecOps, cloud solutions, and records management. We understand
              that each customer is unique, and that's why we tailor our
              product-centric solutions to meet your specific needs. Choose
              CoreLogos for innovation, expertise, and unwavering commitment to
              your success.
            </p>
            <Link to="about" className="btn btn-primary mt-3">
              Read More
            </Link>
          </div>
          <div className="col-lg-6 py-3 wow fadeInRight">
            <div className="img-fluid py-3 text-center">
              <img src="../img/20944999.jpg" alt width={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
