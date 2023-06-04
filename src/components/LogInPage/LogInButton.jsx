import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { logInState } from "../../logInState";

const LogInButtonStyle = styled(Link)`
	width: 80%;
	height: 100%;
	margin-left: 10%;
	padding: 0.25rem;
	color: var(--text-black);
	border-color: black;
	border-style: solid;
	border-radius: 0.5rem;
	background-color: white;
	text-decoration: none;
`;

function LogInButton(prop) {
	const[logIn, setLogIn] = useRecoilState(logInState);
	function handleLogIn() { if( !logIn ) setLogIn(true); }
	return (
		<LogInButtonStyle 
			to="/userpage"
			src={prop.src} 
			name={prop.name} 
			onClick = {handleLogIn}
		>
			<img src={prop.src}></img>
			&nbsp;&nbsp;{prop.name}
		</LogInButtonStyle>
	);
}
export default LogInButton;


