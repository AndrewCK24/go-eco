import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useRecoilState } from "recoil";
import dayjs from "dayjs";

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
	padding: 1rem 0;
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

const ButtonGroup = styled.div`
	flex: 1 1 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 1rem;
`;

const RegisterPage = () => {
	const navigate = useNavigate();
	const [edit, setEdit] = useState(false);
	const [user, setUser] = useRecoilState(userState);
	const { email, name } = user;

const handleRegister = async () => {
	try {
		console.log(user);
		const response = await fetch("/.netlify/functions/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
		setUser({...user, login: true});
		navigate("/user");
  } catch (error) {
    console.error(error);
  }
};

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
						disabled={!edit}
						defaultValue={email}
						onChange={(e) => {
							setUser({ ...user, email: e.target.value });
						}}
					/>
					<TextField
						id="outlined-basic"
						name="given"
						label="Given Name"
						variant="outlined"
						required
						disabled={!edit}
						defaultValue={name.given}
						onChange={(e) => {
							setUser({ ...user, given: e.target.value });
						}}
					/>
					<TextField
						id="outlined-basic"
						name="family"
						label="Family Name"
						variant="outlined"
						required
						disabled={!edit}
						defaultValue={name.family}
						onChange={(e) => {
							setUser({ ...user, family: e.target.value });
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
							defaultValue=""
							required
							onChange={(e) => {
								setUser({ ...user, gender: e.target.value });
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
						onChange={(date) => {
							const formattedDate = dayjs(date).format("YYYY-MM-DD");
							setUser({ ...user, birthday: formattedDate });
						}}
					/>
					<TextField
						id="outlined-basic"
						name="phone"
						label="Phone"
						variant="outlined"
						required
						onChange={(e) => {
							setUser({ ...user, phone: e.target.value });
						}}
					/>
					<TextField
						id="outlined-basic"
						name="nationalId"
						label="National ID"
						variant="outlined"
						required
						onChange={(e) => {
							setUser({ ...user, nationalId: e.target.value });
						}}
					/>
				</Info>
				<ButtonGroup>
					<Button
						variant="outlined"
						color="error"
						onClick={() => setEdit(!edit)}
					>
						修改預設
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={() => handleRegister()}
					>
						註冊
					</Button>
				</ButtonGroup>
			</RegisterForm>
		</Container>
	);
};

export default RegisterPage;
