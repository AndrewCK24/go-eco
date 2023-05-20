import styled from "@emotion/styled";
import LogInButton from "../components/LogInPage/LogInButton";
import LogInTable from "../components/LogInPage/LogInTable";


const Container = styled.div`
	width: 100%;
	display: flex;
	overflow: auto;
	align-items: center;
	flex-direction: column;
	margin-bottom:20%;
`;

const LogInContainer = styled.div`
	width: 60%;
	display: flex;
	margin-top: 5%;
	align-items: center;
	border-radius: 2rem;
	border-style: solid;
	border-color: green;
	flex-direction: column;
	background-color: white;
`;

const LogInTextSet = styled.div`
	width: 100%;
	margin: 5%;
	gap: 1.25rem;
	font-size: 1.75rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: rgba(0, 0, 0, 0.4000000059604645);
`;

const LogInText = styled.div`
	color: rgba(0, 0, 0);
`;

const LogInButtonSet = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-color: black;
`;

const LogInPage = () => {
	return (
		<Container>
			<LogInContainer>
				<LogInTextSet>
					<LogInText>Sign In</LogInText>
					<div>Your Social Campaigns</div>
					<LogInButtonSet>
						<LogInButton src="" name="Sign in with Google" />
						<LogInButton
							src="/assets/appleIcon.svg"
							name="Sign in with Apple"
						/>
					</LogInButtonSet>	
					<div>Or with Email</div>
					<LogInTable default1="Email" default2="Password" />
					<div>© 2023 GO ECO</div>
				</LogInTextSet>
			</LogInContainer>
		</Container>
	);
};

export default LogInPage;
