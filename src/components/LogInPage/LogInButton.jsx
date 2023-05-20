import styled from "@emotion/styled";
const LogInButtonStyle = styled.button`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    border-color: black;
    border-style: solid;
    border-radius: 0.5rem;
    background-color: white;
`;

function LogInButton(prop){
    return(
        <LogInButtonStyle src={prop.src} name={prop.name} onClick={handleClick}>
            <img src={prop.src}></img>
            &nbsp;&nbsp;{prop.name}
        </LogInButtonStyle>
    )
}
export default LogInButton;

function handleClick(){alert("click");}