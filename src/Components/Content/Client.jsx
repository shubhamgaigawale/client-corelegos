import React from "react";

const Client = () => {
  return (
    <div className="page-section">
      <div className="container-fluid">
        <div className="text-center">
          <div className="subhead">Past Performance</div>
          {/* <h2 className="title-section">
            See what can we do for your Projects
          </h2> */}
        </div>
        <div className="row row-cols-md-3 row-cols-lg-5 justify-content-center text-center">
          <h3 className="py-3 px-5">USPTO</h3>
          <h3 className="py-3 px-5">EXIM Bank</h3>
          <h3 className="py-3 px-5">IIA</h3>
          <h3 className="py-3 px-5">BAH</h3>
        </div>
      </div>
    </div>
  );
};

export default Client;
