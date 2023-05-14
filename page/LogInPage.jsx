import LogInButton from "../components/LogInButton";
import LogInTable from "../components/LogInTable";
function LogInPage(){
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
            <LogInButton src="" name="Sign in with Google"></LogInButton>
            <LogInButton src="/assets/appleIcon.svg" name="Sign in with Apple"></LogInButton>
            </div>

            <div className="text2">
              Or with Email
            </div>

            <LogInTable default1="Email" default2="Password"></LogInTable>

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
export default LogInPage;


