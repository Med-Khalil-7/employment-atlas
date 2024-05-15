import React from "react";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="nav-container">
          <a className="logo-link" href="https://fossfox.com/">
            <div className="logo" title="Fossfox"></div>
          </a>
          <div className="button-container">
            <a className="submit-link" href="https://dashboard.fossfox.com/">
              <button className="submit-button" type="button">
                <div className="button-text">submit</div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
