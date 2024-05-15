import React from "react";
export default function Links() {
  return (
    <>
      <div className="lib-container">
        <div className="app-label">
          Languages
          {" "}
          <i className="fa fa-book" aria-hidden="true" />
        </div>
        <div>
          <li>
            <a className="app-link" href="https://fossfox.com/rust">Rust</a>{" "}
            <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/go">Go</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/typescript">TypeScript</a>{" "}
            <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/javascript">JS</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/python">Python</a>{" "}
            <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/java">Java</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/php">PHP</a>{" "}
            <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/ruby">Ruby</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/c">C</a>{" "}
            <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/cpp">C++</a>
          </li>
        </div>
      </div>
      <div className="lib-container">
        <div className="app-label">
          Tech
          {" "}
          <i className="fa fa-laptop" aria-hidden="true" />
        </div>
        <div>
          <li>
            <a className="app-link" href="https://fossfox.com/react">React</a>{" "}
            <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/next-js">Next.js</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/kubernetes">Kubernetes</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/terraform">Terraform</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/node-js">Node</a>{" "}
            <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/redis">Redis</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/postgresql">Postgres</a>{" "}
            <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/mysql">MySQL</a>
          </li>
        </div>
      </div>
      <div className="lib-container">
        <div className="app-label">
          Devs
          {" "}
          <i className="fa fa-github" aria-hidden="true" />
        </div>
        <div>
          <li>
            <a className="app-link" href="https://fossfox.com/frontend-jobs">Frontend</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/backend-jobs">Backend</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/full-stack-jobs">Full-Stack</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/mobile-jobs">Mobile</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/devops-jobs">DevOps</a>
          </li>
        </div>
      </div>
      <div className="lib-container">
        <div className="app-label">
          Services
          {" "}
          <i className="fa fa-code" aria-hidden="true" />
        </div>
        <div>
          <li>
            <a className="app-link" href="https://fossfox.com/aws">AWS</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/amazon-rds">Amazon RDS</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/amazon-ecs">Amazon ECS</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/gcp">GCP</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/azure">Azure</a>
          </li>
        </div>
      </div>
      <div className="lib-container">
        <div className="app-label">
          Offices
          {" "}
          <i className="fa fa-globe" aria-hidden="true" />
        </div>
        <div>
          <li>
          <a className="app-link" href="https://fossfox.com/jobs-in-san-francisco-california">SF</a>{" "}
          <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/jobs-in-new-york-city">NYC</a>
          </li>
          <li>
          <a className="app-link" href="https://fossfox.com/jobs-in-berlin-germany">Berlin</a>{" "}
          <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/jobs-in-paris-france">Paris</a>
          </li>
          <li>
          <a className="app-link" href="https://fossfox.com/jobs-in-united-states">USA</a>{" "}
          <span className="et">&</span>{" "}<a className="app-link" href="https://fossfox.com/jobs-in-canada">Canada</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/jobs-in-india">India</a>
          </li>
          <li>
            <a className="app-link" href="https://fossfox.com/jobs-in-israel">Israel</a>
          </li>
        </div>
      </div>
    </>
  );
}
