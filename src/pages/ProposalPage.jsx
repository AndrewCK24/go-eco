import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import {
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	TextField,
	Select,
	MenuItem,
} from "@mui/material";
import { DateCalendar, DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import userState from "../recoil/userState";

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 1.5rem 0;
`;

const ProposalContainer = styled.div`
	width: 80%;
	max-width: 800px;
	gap: 1rem;
	display: flex;
	padding: 3rem;
	border-radius: 1rem;
	border-style: solid;
	border-color: var(--bg-green-dark);
	flex-direction: column;
	background-color: white;
`;

const DateTimeContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	align-items: stretch;
	justify-content: center;
`;

const TimeContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Title = styled.div`
	padding: 1rem 0;
	color: var(--text-black);
	height: auto;
	font-size: 2rem;
	text-align: center;
	font-weight: 700;
`;

const ProposalPage = () => {
	const [formData, setFormData] = useState({});
	const user = useRecoilValue(userState);
	const navigate = useNavigate();
	const handleConfirm = async (formData) => {
		const hostId = user._id;
		const updateTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
		const {
			name,
			begDate,
			begTime,
			endDate,
			endTime,
			applyEndDate,
			type,
			briefIntroduction,
			introduction,
			location,
			address,
		} = formData;

		const eventDate = { begDate, begTime, endDate, endTime };
		const applyDate = { endDate: applyEndDate };
		const introductionObj = { brief: briefIntroduction, detail: introduction };
		const volunteers = [];

		const data = {
			hostId,
			updateTime,
			name,
			eventDate,
			applyDate,
			type,
			introduction: introductionObj,
			location: { name: location, address },
			volunteers,
		};

		console.log(data);
		try {
			const response = await fetch("/.netlify/functions/create-event", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify(data),
			});
			const savedData = await response.json();
			console.log("event created:", savedData);
			navigate(`/event/${savedData._id}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Title>建立你的活動</Title>
			<ProposalContainer>
				<DateTimeContainer>
					<DateCalendar
						showDaysOutsideCurrentMonth
						disablePast
						required
						onChange={(date) => {
							setFormData({
								...formData,
								begDate: dayjs(date).format("YYYY-MM-DD"),
								endDate: dayjs(date).format("YYYY-MM-DD"),
							});
						}}
					/>
					<TimeContainer>
						<TimePicker
							label="活動開始時間"
							required
							onChange={(time) => {
								setFormData({
									...formData,
									begTime: time.format("HH:mm"),
								});
							}}
						/>
						<TimePicker
							label="活動結束時間"
							required
							onChange={(time) => {
								setFormData({
									...formData,
									endTime: time.format("HH:mm"),
								});
							}}
						/>
					</TimeContainer>
				</DateTimeContainer>
				<Divider variant="middle" />
				<DatePicker
					id="outlined-basic"
					name="applyEndDate"
					label="報名截止日"
					disablePast
					required
					value={formData.applyEndDate}
					onChange={(date) => {
						setFormData({
							...formData,
							applyEndDate: dayjs(date).format("YYYY-MM-DD"),
						});
					}}
				/>
				<Divider variant="middle" />
				<TextField
					required
					id="outlined-basic"
					name="location"
					label="活動地點"
					variant="outlined"
					onChange={(e) => {
						setFormData({ ...formData, location: e.target.value });
					}}
				/>
				<TextField
					required
					id="outlined-basic"
					name="address"
					label="地址"
					variant="outlined"
					onChange={(e) => {
						setFormData({ ...formData, address: e.target.value });
					}}
				/>
				<Divider variant="middle" />
				<TextField
					required
					id="outlined-basic"
					name="name"
					label="活動名稱"
					variant="outlined"
					onChange={(e) => {
						setFormData({ ...formData, name: e.target.value });
					}}
				/>
				<FormControl required fullWidth>
					<InputLabel>活動種類</InputLabel>
					<Select
						name="type"
						id="type"
						label="活動種類"
						variant="outlined"
						defaultValue=""
						onChange={(e) => {
							setFormData({ ...formData, type: e.target.value });
						}}
					>
						<MenuItem value="recycle">環保回收</MenuItem>
						<MenuItem value="cleanUp">環境清理</MenuItem>
					</Select>
				</FormControl>
				<TextField
					required
					multiline
					rows={4}
					id="outlined-basic"
					name="briefIntroduction"
					label="活動簡介"
					variant="outlined"
					onChange={(e) => {
						setFormData({ ...formData, briefIntroduction: e.target.value });
					}}
				/>
				<TextField
					required
					multiline
					rows={10}
					id="outlined-basic"
					name="introduction"
					label="活動內容"
					variant="outlined"
					helperText="Please tell us the story about your project and why 
					people should support it. Please note: must have enough information 
					to review the plan. If you provide too little information, or cannot 
					evaluate the authenticity and feasibility of the plan, the plan will 
					not be put on the shelves."
					onChange={(e) => {
						setFormData({ ...formData, introduction: e.target.value });
					}}
				/>
				<Divider variant="middle" />
				<FormGroup>
					<FormControlLabel
						required
						control={<Checkbox />}
						label="The proposer (and the legal representative) have fully
								understood and agreed to the rights and obligations of the terms
								of cooperation"
					/>
				</FormGroup>
				<Button
					variant="contained"
					color="success"
					onClick={() => {
						handleConfirm(formData);
					}}
				>
					CONFIRM
				</Button>
			</ProposalContainer>
		</Container>
	);
};

export default ProposalPage;
