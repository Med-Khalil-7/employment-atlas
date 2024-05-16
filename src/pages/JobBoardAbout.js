import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import Title from "../components/Title";
import SearchFilter from "../components/SearchFilter";
import Subscribe from "../components/Subscribe";
import Links from "../components/Links";
import Footer from "../components/Footer";
import Table from "../components/Table";
import NavBar from "../components/NavBar";

const JobBoardAbout = () => {
  return (
    <>
      <NavBar />
      <div className="pd-top-60">
        <div className="app-left" />
        <div className="app-main">
          <div className="app-page-contents">
            <section className="title-container">
              <header>
                <div className="title-content">
                  <h1 className="app-md">Automattic</h1>
                  <ul>
                    <li>
                      <a className="app-link" href="https://fossfox.com/">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        <span>home</span>
                      </a>
                    </li>
                    <li>
                      <a className="app-link" href="https://automattic.com">
                        <i class="fa fa-link" aria-hidden="true"></i>
                        <span>automattic.com</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="app-link"
                        href="https://github.com/automattic"
                      >
                        <i class="fa fa-github" aria-hidden="true"></i>
                        <span>github</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="app-link"
                        href="https://twitter.com/automattic"
                      >
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <span>twitter</span>
                      </a>
                    </li>
                    <li>
                      <span className="app-tooltip app-tooltip--direction-1">
                        <span className="app-tooltip__contents">
                          <i class="fa fa-id-card" aria-hidden="true"></i>
                          <span>1.5k+ people</span>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="app-right" />
              </header>
              <div className="title-content">
                <p>
                  Automattic is building publishing tools (
                  <a
                    className="app-link app-link--external"
                    href="https://wordpress.com/"
                  >
                    WordPress.com
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  ,{" "}
                  <a
                    className="app-link app-link--external"
                    href="https://tumblr.com/"
                  >
                    Tumblr
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  and{" "}
                  <a
                    className="app-link app-link--external"
                    href="https://pocketcasts.com/"
                  >
                    Pocket Casts
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  ). Hiring for 1{" "}
                  <a
                    className="app-link"
                    href="https://fossfox.com/devops-jobs"
                  >
                    devops
                  </a>{" "}
                  engineering position remotely.
                </p>
              </div>
            </section>
          </div>
          <div className="app-footer">
            <Subscribe />
            <div className="app-footer-test">
              <div className="app-footer-links">
                <Links />
              </div>
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobBoardAbout;
