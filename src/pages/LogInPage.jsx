import styled from "@emotion/styled";
import { GoogleLogin } from "@react-oauth/google";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import userState from "../recoil/userState";

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
	border-color: var(--bg-green-dark);
	flex-direction: column;
`;

const LogInTextSet = styled.div`
	width: 80%;
	margin: 10%;
	gap: 1.25rem;
	font-size: 1.75rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: var(--text-gray);
`;

const LogInText = styled.div`
	font-size: 4rem;
`;

const LogInPage = () => {
	const [user, setUser] = useRecoilState(userState);
	const navigate = useNavigate();
	const handleLogin = async (res) => {
		console.log(res);
		try {
			const response = await fetch("/.netlify/functions/get-user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					credential: res.credential,
				}),
			});
			const data = await response.json();
			console.log(data);
			if (!data.login) {
				setUser({...data});
				console.log(user);
				navigate("/register");
			} else {
				const { _doc, login } = data;
				setUser({..._doc, login});
				navigate("/user");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Container>
			<LogInContainer>
				<LogInTextSet>
					<LogInText>Sign In</LogInText>
					<GoogleLogin
						onSuccess={(res) => {
							handleLogin(res);
						}}
						onError={() => {
							console.log("login error");
						}}
					/>
				</LogInTextSet>
			</LogInContainer>
		</Container>
	);
};

export default LogInPage;
