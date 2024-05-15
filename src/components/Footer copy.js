import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <a className="logo-link" href="https://fossfox.com/">
          <div className="logo" title="Fossfox">
          Employment Atlas
          </div>
        </a>
      </div>
      <ul className="menu-list">
        <li className="menu-item">
          <div className="country-picker">
            <span className="tooltip">
              <span className="tooltip-contents">
                <div className="emoji">🇹🇳</div>
              </span>
            </span>
          </div>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="https://fossfox.com/privacy">
            Privacy
          </a>
        </li>
        <li className="menu-item">
          <span className="footer-text">© 2024</span>
        </li>
      </ul>
    </div>
  );
}
