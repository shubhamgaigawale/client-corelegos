import React from "react";

const JobDescription = () => {
  return (
    <div class="page-section pt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-single-wrap">
              <h1 className="post-title">Fullstack Software Developer</h1>
              <div className="post-meta">
                <div>Experience : 5+ Years</div>
              </div>
              <h5 className="mb-2">Roles and Responsibilities</h5>
              <div className="post-content">
                <p>
                  We need a Full Stack Developer to be part of a dynamic team
                  developing high performing and scalable next gen applications
                  for our clients.
                </p>
                <p>
                  You will be working in an agile environment practicing
                  DevSecOps utilizing AWS and Platform as a Service.
                </p>
                <p>
                  Managing the end-to-end life cycle for the production of
                  software and applications.
                </p>
                <p>
                  Overseeing and guiding the analyzing, writing, building, and
                  deployment of software.
                </p>
                <p>
                  Overseeing the automated testing and providing feedback to
                  management during the development process.
                </p>
                <p>
                  Modifying and testing changes to previously developed
                  applications.
                </p>
                <h5 className="mb-2">Required Skills</h5>

                <p>
                  Front End Skills: Single Page Applications (ReactJS, Angular,
                  JavaScript, CSS, HTML), Responsive Design (BootStrap)
                </p>
                <p>
                  Back End Skills: Microservices, REST, Node.js, JBoss/Tomcat
                  JVM (Java - Spring, Spring Boot, Hibernate, etc.), Database
                  (Oracle, MySQL, etc.).
                </p>
                <p>Build Tools: Maven, Gulp, Git</p>
                <p>
                  Amazon Web Services (Lambda, SQS, SNS, CloudFormation, etc.)
                  Docker, Ansible.
                </p>
                <p>
                  Experience with software development methodologies such as
                  Waterfall, Agile, Scrum and Kanban.
                </p>
                <p>Experience with DevOps, CI/CD pipelines.</p>
                <p>
                  Implement the product's lifecycle: Design, development,
                  quality, deployment and maintenance
                </p>
                <p>
                  Develop and adhere to best-practices for developing
                  applications
                </p>
                <p>
                  Continuously contribute to team performance improvement and
                  collaboration
                </p>
                <h5 className="mb-2">Desired Skills</h5>
                <p>Engagement with technical leadership</p>
                <p>Effective communication and presentation skills.</p>

                <h5 className="mb-2">Education</h5>
                <p>
                  B.S. in computer science or a related technical field, or
                  equivalent experience
                </p>
                <h5 className="mb-2">Benefits</h5>
                <p>Medical, Dental, Vision</p>
                <h5 className="mb-2">Clearance</h5>
                <p>
                  Applicants selected will be subject to background checka nd
                  security investigation to meet the eligibility requirements
                  for US Govt. public trust clearance.
                </p>
              </div>
            </div>
            {/* .blog-single-wrap */}
            <div className="comment-form-wrap pt-5">
              <h3 className="mb-5">Leave a email to apply</h3>
              <form action="#" className>
                <div className="form-group"></div>
                <div className="form-group">
                  <div
                    type="submit"
                    defaultValue="Apply"
                    className="btn btn-primary bg-light"
                  >
                    <a href="mailto:example@email.com">Apply</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
