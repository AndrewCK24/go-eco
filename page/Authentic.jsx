import SignInButton from "../components/SignInButton";
import LogInForm from "../components/LogInForm";
function AuthenticationPage(){
    return(<div>
        <div className="page">
          <div className="container">
            <div className="textSet">
              <div className="text">Sign In</div>
              <div className="text1">
                <div>Your Social Campaigns</div>
              </div>
            </div>

            <div className="buttonSet">
            <SignInButton src="" name="Sign in with Google"></SignInButton>
            <SignInButton src="" name="Sign in with Apple"></SignInButton>
            </div>

            <div className="text2">
              Or with Email
            </div>

            <LogInForm default1="Email" default2="Password"></LogInForm>

            <div>© 2023 GO ECO</div>
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


