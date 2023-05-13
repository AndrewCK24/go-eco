import SignInButton from "../components/SignInButton";
function AuthenticationPage(){
    return(<div>
        <div className="page">
          <div className="container">
            <div className="authentication-sign-in-a-frame427319044">
              <span>Sign In</span>
              <span className="authentication-sign-in-a-text02">
                <span>Your Social Campaigns</span>
              </span>
            </div>
            <div className="authentication-sign-in-a-frame427318925">
              <div className="authentication-sign-in-a-form">
                <div className="authentication-sign-in-a-autoaddedframe">
                  <span className="authentication-sign-in-a-text04">
                    <SignInButton src="" name="Sign in with Google"></SignInButton>
                  </span>
                </div>
              </div>
              <div className="authentication-sign-in-a-form1">
                <div className="authentication-sign-in-a-autoaddedframe1">
                  <span className="authentication-sign-in-a-text06 14Regular">
                    <SignInButton src="" name="Sign in with Apple"></SignInButton>
                  </span>
                </div>
              </div>
            </div>
            <div className="authentication-sign-in-a-frame427318927">
              <span className="authentication-sign-in-a-text08 12Regular">
                <span>Or with Email</span>
              </span>
            </div>
            <div className="authentication-sign-in-a-frame427319054">
              <div className="authentication-sign-in-a-form2">
                <span className="authentication-sign-in-a-text10 14Regular">
                  <span>Email</span>
                </span>
              </div>
              <div className="authentication-sign-in-a-frame427319041">
                <div className="authentication-sign-in-a-form3">
                  <span className="authentication-sign-in-a-text12 14Regular">
                    <span>Password</span>
                  </span>
                </div>
                <span className="authentication-sign-in-a-text14 14Regular1">
                  <a rel="#page">Forgot Password?</a>
                </span>
              </div>
            </div>
            <div className="authentication-sign-in-a-frame427319042">
              <button className="authentication-sign-in-a-button">
                <span className="authentication-sign-in-a-text16 H31">
                  <span>Sign In</span>
                </span>
              </button>
              <span className="authentication-sign-in-a-text18 14Regular1">
                <a rel="#page" className="authentication-sign-in-a-text19">
                  Not a Member yet?
                </a>
                <span className="authentication-sign-in-a-text20"></span>
                <span>Sign Up</span>
              </span>
            </div>
          </div>
          <div className="authentication-sign-in-a-header-b"></div>
          <div className="authentication-sign-in-a-copyright">
            <span className="authentication-sign-in-a-text22 12Regular1">
              <span>© 2023 GO ECO</span>
            </span>
          </div>
          <img
            src="public/assets/LOGO_GOECO.png"
            alt="LOGO"
            className="LOGO"
          />
        </div>
    </div>
    )
}
export default AuthenticationPage;


