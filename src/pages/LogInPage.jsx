import LogInButton from "../components/LogInPage/LogInButton";
import LogInTable from "../components/LogInPage/LogInTable";
import styled from "@emotion/styled";
import "../pageCSS/LogInPage.css";

const Container = styled.div`
	width: 100%;
	display: flex;
	overflow: auto;
	align-items: center;
	flex-direction: column;
`;
const LogInPage = () => {
	return (
		<Container>
			<div>
				<div className="LogInPage">
					<div className="LogInContainer">
						<div className="LogInTextSet">
							<div className="LogInText">Sign In</div>
							<div className="LogInText1">
								<div>Your Social Campaigns</div>
							</div>
						</div>

						<div className="LogInButtonSet">
							<LogInButton src="" name="Sign in with Google"></LogInButton>
							<LogInButton
								src="/assets/appleIcon.svg"
								name="Sign in with Apple"
							></LogInButton>
						</div>

						<div className="LogInText2">Or with Email</div>

						<LogInTable default1="Email" default2="Password"></LogInTable>

						<div>© 2023 GO ECO</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default LogInPage;
