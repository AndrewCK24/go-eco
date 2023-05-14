function handleClick(){alert("click");}
function LogInButton(prop){
    return(
        <button name={prop} onClick={handleClick} className="buttonStyle">
            <img src={prop.src}></img>
            &nbsp;&nbsp;{prop.name}
        </button>
    )
}
export default LogInButton;