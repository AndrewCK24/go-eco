function LogInInput(prop){
    return(<div>
        <input defaultValue={prop.default} className="inputStyle">{prop.name}</input>
    </div>
    )
}
export default LogInInput;