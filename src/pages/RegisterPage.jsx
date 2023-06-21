import { useState } from "react";
import styled from "@emotion/styled";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useRecoilState } from "recoil";

import userState from "../recoil/userState";

import AvatarGroup from "../components/RegisterPage/AvatarGroup";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const RegisterForm = styled.form`
	width: 80%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	align-items: stretch;
	justify-content: center;
`;

const Title = styled.div`
	border-bottom: 0.125rem solid var(--bg-green-dark);
	margin: 0 0.5rem;
	padding: 1rem 0;
	flex: 1 1 100%;
	font-size: 2rem;
	font-weight: 700;
`;

const Info = styled.div`
	padding: 1rem 0;
	flex: 1 1 300px;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 1rem;
`;

const UserImg = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
`;

const RegisterPage = () => {
	const [userData, setUserData] = useState({
		gender: "other",
	});
	const [user, setUser] = useRecoilState(userState);
	const { email, name, picture } = user;
	return (
		<Container>
			<RegisterForm>
				<Title>註冊</Title>
				<Info>
					<AvatarGroup user={user} setUser={setUser} />
					<TextField
						id="outlined-basic"
						name="email"
						label="Email"
						variant="outlined"
						required
						defaultValue={email}
						onChange={(e) => {
							setUserData({ ...userData, email: e.target.value });
						}}
					/>
					<TextField
						id="outlined-basic"
						name="given"
						label="Given Name"
						variant="outlined"
						required
						defaultValue={name.given}
						onChange={(e) => {
							setUserData({ ...userData, given: e.target.value });
						}}
					/>
					<TextField
						id="outlined-basic"
						name="family"
						label="Family Name"
						variant="outlined"
						required
						defaultValue={name.family}
						onChange={(e) => {
							setUserData({ ...userData, family: e.target.value });
						}}
					/>
				</Info>
				<Info>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Gender</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							name="gender"
							label="Gender"
							variant="outlined"
							value={userData.gender}
							required
							onChange={(e) => {
								setUserData({ ...userData, gender: e.target.value });
							}}
						>
							<MenuItem value="female">Female</MenuItem>
							<MenuItem value="male">Male</MenuItem>
							<MenuItem value="other">Other</MenuItem>
						</Select>
					</FormControl>
					<DatePicker
						id="outlined-basic"
						name="birthday"
						label="Date of Birth"
						required
						disableFuture
						onChange={(e) => {
							setUserData({ ...userData, birthday: e.target.value });
						}}
					/>
					<TextField
						id="outlined-basic"
						name="phone"
						label="Phone"
						variant="outlined"
						required
						onChange={(e) => {
							setUserData({ ...userData, phone: e.target.value });
						}}
					/>
					<TextField
						id="outlined-basic"
						name="nationalId"
						label="National ID"
						variant="outlined"
						required
						onChange={(e) => {
							setUserData({ ...userData, nationalId: e.target.value });
						}}
					/>
				</Info>
			</RegisterForm>
		</Container>
	);
};

export default RegisterPage;
