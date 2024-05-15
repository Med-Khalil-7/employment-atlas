import React from "react";

export default function Subscribe() {
  return (
    <>
      <div className="subscribe-container">
        <h2 className="subscribe-title">
          comfortable? let's <span className="highlight">shake that up</span> a bit{" "}
          <span className="emoji" aria-hidden="true">
            🫨
          </span>
        </h2>
        <p className="subscribe-description">keep an eye on the market / unsub anytime</p>
        <div className="subscribe-form">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email Me Companies</label>
              <div className="input-group">
              <i className="app-icon fa fa-lock" aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  maxLength="255"
                  required
                  placeholder="you@gmail.com"
                />
                
              </div>
            </div>
            <div className="form-group">
              <label>That Use</label>
              <div className="empty-select">
                <span className="text">any stack</span>
                <i className="icon"></i>
              </div>
            </div>
            <div className="form-group">
              <label>& Pay Min Salary</label>
              <div className="empty-select">
                <span className="text">$100k+/yr</span>
                <i className="icon"></i>
              </div>
            </div>
            <div className="form-group">
              <button type="submit">subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
