function LogInInput(prop){
    return(<div>
        <input defaultValue={prop.default} className="LogInInputStyle">{prop.name}</input>
    </div>
    )
}
export default LogInInput;