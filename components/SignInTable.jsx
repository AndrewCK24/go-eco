import SignInInput from "./SignInInput";
function SignInTable(prop){
    return(<div>
        <div className="inputSet">
            <SignInInput default={prop.default1}></SignInInput>
            <div className="text3">
                <SignInInput default={prop.default2}></SignInInput>
                <a href="#page">Forgot Password?</a>
            </div>
        </div>
        <div className="buttonSet2">
            <button className="buttonStyle2">
                Sign In
            </button>
            <div className="text1">
                Not a Member yet? 
                <a href="#page"> Sign up</a>
            </div>
        </div>
    </div>
    )
}
export default SignInTable;