import LogInInput from "./LogInInput";
function LogInTable(prop){
    return(<div>
        <div className="inputSet">
            <LogInInput default={prop.default1}></LogInInput>
            <div className="text3">
                <LogInInput default={prop.default2}></LogInInput>
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
export default LogInTable;