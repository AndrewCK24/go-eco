import styled from "@emotion/styled";
const LogInButtonStyle = styled.button`
	width: 80%;
	height: 100%;
	margin-left: 10%;
	border-color: black;
	border-style: solid;
	border-radius: 0.5rem;
	background-color: white;
`;

function LogInButton(prop) {
	return (
		<LogInButtonStyle src={prop.src} name={prop.name} onClick={handleClick}>
			<img src={prop.src}></img>
			&nbsp;&nbsp;{prop.name}
		</LogInButtonStyle>
	);
}
export default LogInButton;

function handleClick() {
	alert("click");
}
