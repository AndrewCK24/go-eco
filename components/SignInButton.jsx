function handleClick(){Window.alert("click");}
function SignInButton(prop){
    return(
        <button name={prop} onClick={handleClick} className="buttonStyle">
            <img src={prop.src}></img>
            {prop.name}
        </button>
    )
}
export default SignInButton;