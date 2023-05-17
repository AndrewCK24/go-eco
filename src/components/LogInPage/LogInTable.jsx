import LogInInput from "./LogInInput";
function LogInTable(prop){
    return(<div>
        <div className="LogInInputSet">
            <LogInInput default={prop.default1}></LogInInput>
            <div className="LogInText3">
                <LogInInput default={prop.default2}></LogInInput>
                <a href="#page">Forgot Password?</a>
            </div>
        </div>
        <div className="LogInButtonSet2">
            <button className="LogInButtonStyle2">
                Sign In
            </button>
            <div className="LogInText1">
                Not a Member yet? 
                <a href="#page"> Sign up</a>
            </div>
        </div>
    </div>
    )
}
export default LogInTable;