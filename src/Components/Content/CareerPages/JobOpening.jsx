import React from "react";
import { Link } from "react-router-dom";

const JobOpening = () => {
  return (
    <main>
      <div className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-md-10 col-lg-4 py-3">
                  <div className="card-blog">
                    <div className="header">
                      <div className="entry-footer">
                        <div className="post-author">
                          FullStack Software Developer
                        </div>
                      </div>
                    </div>
                    <div className="footer">
                      <Link to="/jobDescription">
                        Read More{" "}
                        <span className="mai-chevron-forward text-sm" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <div className="col-12 my-5">
                  <nav aria-label="Page Navigation">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true">
                          Previous
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">
                          1 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobOpening;
