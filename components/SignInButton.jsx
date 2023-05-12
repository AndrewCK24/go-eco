function handleClick(){return;}
function SignInButton(prop){
    return(<div>
        <img src={prop.src}></img>
        <button name={prop} onClick={handleClick}>{prop.name}</button>
    </div>
    )
}
export default SignInButton;