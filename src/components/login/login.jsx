import React from "react";
import Footer from "../footer/footer";
import Navbar from "../homePage/navbar";
import './login.css'

export default function LoginPage() {
  return (
    <div style={{ backgroundColor: "hsl(240, 100%, 99%)" }}>
    <Navbar/>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="loginbox">
            <div className="login-left">
              <h3 className="smartLogo">Research Buddy</h3>
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>

                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      label="Email"
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                    <div
                      id="validationServerUsernameFeedback"
                      className="invalid-feedback"
                    >
                      Please enter your Email Address.
                    </div>
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="password"
                      minLength="6"
                      required
                    />

                    <label>
                      <input type="checkbox" /> Show password
                    </label>
                    <label>
                      <a className="forgotPassword" href="/resetpass">
                        Forgot Password
                      </a>
                    </label>
                  </div>

                  <br />

                  <center>
                    <div className="form-group mb-0">
                      <a href="/dashboard" className="btn btn-login">
                        Login
                      </a>
                    </div>
                  </center>
                </form>
                {/* eslint-disable */}
                <div className="login-or">
                  <span className="or-line" />
                  <span className="span-or">or</span>
                  <br />
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
