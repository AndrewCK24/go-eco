import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";

const Container = styled.div`
	width: 100%;
	display: flex;
	overflow: auto;
	align-items: center;
	flex-direction: column;
	margin-bottom: 3%;
`;

const ProposalContainer = styled.div`
	width: 80%;
	gap: 1rem;
	top: 15%;
	display: flex;
	padding: 3rem;
	border-radius: 2rem;
	border-style: solid;
	border-color: green;
	flex-direction: column;
	background-color: white;
`;

const Line1 = styled.hr`
	border-top: solid rgba(107, 188, 129, 1);
	width: 23%;
`;

const Line2 = styled.hr`
	border-top: solid rgba(180, 231, 194, 1);
	width: 100%;
`;

const Row = styled.div`
	color: rgba(0, 0, 0, 1);
	text-align: left;
	font-weight: 700;
	display: flex;
	flex-direction: row;
	gap: 2rem;
`;

const TextArea = styled.textarea`
	border-color: rgba(0, 0, 0, 0.3);
	border-style: solid;
	border-width: 0.1rem;
	border-radius: 0.5rem;
	background-color: rgba(217, 217, 217, 0.3);
	resize: none;
	height: ${(props) => props.height};
`;

const DateTime = styled.input`
	border-radius: 0.5rem;
	width: 20%;
	min-width: 9rem;
`;

const Title = styled.div`
	color: rgba(0, 0, 0, 1);
	height: auto;
	font-size: 2rem;
	text-align: center;
	font-weight: 700;
`;

const LeftBlock = styled.label`
	color: rgba(0, 0, 0, 1);
	width: 13%;
	font-size: 1rem;
	text-align: left;
	font-weight: 600;
`;

const RightBlock = styled.div`
	color: rgba(0, 0, 0, 1);
	display: flex;
	flex-direction: column;
	width: 85%;
	text-align: left;
	font-weight: 600;
`;

const DateTimeContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
`;

const Text1 = styled.span`
	color: rgba(0, 0, 0, 0.6499999761581421);
	font-size: 1rem;
	text-align: center;
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
`;

const Text2 = styled.div`
	color: rgba(0, 0, 0, 0.5);
	font-size: 0.8rem;
	font-style: Medium;
	text-align: left;
	font-family: Poppins;
	font-weight: 500;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
`;

const CheckBox = styled.input``;
const CheckBoxLabel = styled.label``;
const Button = styled.button`
	border-color: rgba(89, 151, 106, 1);
	border-style: solid;
	border-width: 0.1rem;
	border-radius: 0.3rem;
	font-family: "Poppins";
	font-style: normal;
	font-weight: 500;
	background-color: white;
	color: rgba(89, 151, 106, 1);
	padding: 0.7rem 1rem;
`;

const RowContainer = ({
	leftText,
	height,
	setFormData,
	formData,
	name,
	rightText,
}) => {
	const handleInputChange = (e) => {
		setFormData({ ...formData, [name]: e.target.value });
	};

	return (
		<Row>
			<LeftBlock>{leftText}</LeftBlock>
			<RightBlock>
				<TextArea required height={height} onChange={handleInputChange} />
				<Text2>{rightText}</Text2>
			</RightBlock>
		</Row>
	);
};

const ProposalPage = () => {
	const [eventID, setEventID] = useState("");
	const [formData, setFormData] = useState({});
const handleConfirm = async (formData) => {
	const hostId = "HOST_USER_ID";
	const timestamp = Date.now();
	const name = formData.name;
	const begDate = formData.begDate;
	const begTime = formData.begTime;
	const endDate = formData.endDate;
	const endTime = formData.endTime;
	const applyEndDate = formData.applyEndDate;
	const briefIntroduction = formData.briefIntroduction;
	const introduction = formData.introduction;
	const locationName = formData.location;
	const address = formData.address;

	const eventDate = {
		begDate,
		begTime,
		endDate,
		endTime,
	};

	const applyDate = {
		endDate: applyEndDate,
	};

	const introductionObj = {
		brief: briefIntroduction,
		detail: introduction,
	};

	const location = {
		name: locationName,
		address,
	};

	const volunteers = [];

	const data = {
		hostId,
		timestamp,
		name,
		eventDate,
		applyDate,
		introduction: introductionObj,
		location,
		volunteers,
	};

	console.log(data);
	await fetch("/.netlify/functions/saveEvent/saveEvent.js", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// "Access-Control-Allow-Origin": "https://go-eco.netlify.app",
		},
		body: JSON.stringify(data),
	});

	// TODO: 跳轉到該活動的頁面，注意要帶上eventID，注意Invalid hook call
};

	// TODO: 記得加上必填選項
	return (
		<Container>
			<Title>Create your proposal</Title>
			<Line1 />
			<br />
			<br />
			<ProposalContainer>
				<Row>
					<LeftBlock>開始時間</LeftBlock>
					<RightBlock>
						<DateTimeContainer>
							<DateTime
								type="date"
								onChange={(e) => {
									setFormData({ ...formData, begDate: e.target.value });
								}}
							/>
							<DateTime
								type="time"
								onChange={(e) => {
									setFormData({ ...formData, begTime: e.target.value });
								}}
							/>
						</DateTimeContainer>
					</RightBlock>
				</Row>
				<Row>
					<LeftBlock>結束時間</LeftBlock>
					<RightBlock>
						<DateTimeContainer>
							<DateTime
								type="date"
								onChange={(e) => {
									setFormData({ ...formData, endDate: e.target.value });
								}}
							/>
							<DateTime
								type="time"
								onChange={(e) => {
									setFormData({ ...formData, endTime: e.target.value });
								}}
							/>
						</DateTimeContainer>
					</RightBlock>
				</Row>
				<Line2 />
				<Row>
					<LeftBlock>報名截止日</LeftBlock>
					<RightBlock>
						<DateTime
							type="date"
							onChange={(e) => {
								setFormData({ ...formData, applyEndDate: e.target.value });
							}}
						/>
					</RightBlock>
				</Row>

				<Line2 />
				<Row>
					<LeftBlock>活動種類</LeftBlock>
					<RightBlock>
						<select
							id="type"
							name="type"
							onChange={(e) => {
								setFormData({ ...formData, type: e.target.value });
							}}
							required
						>
							<option value="">請選擇活動種類</option>
							<option value="recycle">環保回收</option>
							<option value="cleanUp">環境清理</option>
						</select>
					</RightBlock>
				</Row>
				<Line2 />
				<RowContainer
					leftText="活動名稱"
					formData={formData}
					setFormData={setFormData}
					name="name"
				/>
				<RowContainer
					leftText="活動簡介"
					formData={formData}
					setFormData={setFormData}
					name="briefIntroduction"
					height="5rem"
				/>
				{/* <RowContainer
					leftText="Cover Photo"
					rightText="Please upload an image smaller than 1MB. The recommended size is
            1200 x 675 pixels (16:9). The cover image can be edited and modified
            before the project goes live."
				/> */}
				<RowContainer
					leftText="活動詳情"
					formData={formData}
					setFormData={setFormData}
					name="introduction"
					height="20rem"
					rightText="Please tell us the story about your project and why people should
            support it. Please note: tsk tsk must have enough
            information to review the plan. If you provide too little
            information, or tsk tsk cannot evaluate the authenticity and
            feasibility of the plan, the plan will not be put on the shelves."
				/>
				<Line2 />
				<RowContainer
					leftText="活動地點"
					formData={formData}
					setFormData={setFormData}
					name="location"
				/>
				<RowContainer
					leftText="地址"
					formData={formData}
					setFormData={setFormData}
					name="address"
				/>
				<Line2 />

				<Row>
					<LeftBlock>Terms of cooperation</LeftBlock>
					<RightBlock>
						<CheckBoxLabel>
							<CheckBox type="checkbox" />
							<Text1>
								&emsp;The proposer (and the legal representative) have fully
								understood and agreed to the rights and obligations of the terms
								of cooperation
							</Text1>
						</CheckBoxLabel>
						<Text2>
							Please confirm that you have read and agree to the terms of
							cooperation of Gee x Proposer ..
						</Text2>
					</RightBlock>
				</Row>
			</ProposalContainer>
			<br />
			<Button
				onClick={() => {
					handleConfirm(formData);
				}}
			>
				CONFIRM
			</Button>
		</Container>
	);
};

export default ProposalPage;
