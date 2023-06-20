import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useRecoilState } from "recoil";

import userState from "../recoil/userState";

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

const Info = styled.div`
	padding: 1rem 0;
	flex: 1 1 40%;
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
	const [user, setUser] = useRecoilState(userState);
	const { email, name, picture } = user;
	return (
		<Container>
			<RegisterForm>
				<Info>
					<UserImg src={picture} alt={name} />
					<TextField
						id="outlined-basic"
            name="email"
						label="Email"
						variant="outlined"
						defaultValue={email}
					/>
					<TextField
						id="outlined-basic"
            name="given"
						label="Given Name"
						variant="outlined"
						defaultValue={name.given}
					/>
          <TextField
            id="outlined-basic"
            name="family"
            label="Family Name"
            variant="outlined"
            defaultValue={name.family}
          />
				</Info>
				<Info>
					<TextField
						id="outlined-basic"
            name="phone"
						label="Phone"
						variant="outlined"
						required
					/>
					<DatePicker
						id="outlined-basic"
            name="birthday"
						label="Date of Birth"
						required
						disableFuture
						// slotProps={{
						// 	textField: {
						// 		helperText: "MM/DD/YYYY",
						// 	},
						// }}
					/>
					<TextField
						id="outlined-basic"
            name="nationalId"
						label="National ID"
						variant="outlined"
						required
					/>
          <TextField
            id="outlined-basic"
            name="address"
            label="Address"
            variant="outlined"
            required
          />
				</Info>
			</RegisterForm>
		</Container>
	);
};

export default RegisterPage;
