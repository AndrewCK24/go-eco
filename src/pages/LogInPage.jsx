import styled from "@emotion/styled";
import LogInButton from "../components/LogInPage/LogInButton";
import LogInInputForm from "../components/LogInPage/LogInInputForm";

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 20%;
`;

const LogInContainer = styled.div`
	width: 50%;
	height: 55rem;
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
	width: 80%;
	margin: 10%;
	gap: 1.25rem;
	font-size: 1.75rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: rgba(0, 0, 0, 0.4000000059604645);
`;

const LogInText = styled.div`
	font-size: 4rem;
	color: rgba(0, 0, 0);
`;

const LogInButtonSet = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
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
					<LogInInputForm />
					<div>© 2023 GO ECO</div>
				</LogInTextSet>
			</LogInContainer>
		</Container>
	);
};

export default LogInPage;
