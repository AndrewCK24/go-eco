import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

const LogInButton = (prop) => {
	return (
		<LogInButtonStyle
			to="/user"
			src={prop.src}
			name={prop.name}
			// onClick = {handleLogIn}
		>
			<img src={prop.src}></img>
			&nbsp;&nbsp;{prop.name}
		</LogInButtonStyle>
	);
};

export default LogInButton;
