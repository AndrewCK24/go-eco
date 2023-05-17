function LogInInput(prop){
    return(<div>
        <input defaultValue={prop.default} className="LogInInputStyle">{prop.value}</input>
    </div>
    )
}
export default LogInInput;