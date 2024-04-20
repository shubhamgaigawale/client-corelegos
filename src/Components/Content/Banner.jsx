import React from "react";

const Banner = () => {
  return (
    <div className="container">
      <div className="page-banner home-banner">
        <div className="row align-items-center flex-wrap-reverse h-100">
          <div className="col-md-6 py-5 wow fadeInLeft">
            <h1 className="mb-4">Delivering Next Gen Solutions</h1>
            {/* <p className="text-lg text-grey mb-5">
              Ignite the most powerfull growth engine you have ever built for
              your company
            </p> */}
          </div>
          <div className="col-md-6 py-5 wow zoomIn">
            <div className="img-fluid text-center">
              <img src="./img/banner_image_1.svg" alt />
            </div>
          </div>
        </div>
        <a href="#about" className="btn-scroll" data-role="smoothscroll">
          <span className="mai-arrow-down" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
