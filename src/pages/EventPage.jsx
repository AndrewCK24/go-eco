import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Button, Skeleton } from "@mui/material";
import styled from "@emotion/styled";
// import Map from "../components/Map";

import presentEventState from "../recoil/presentEventState";

const Container = styled.div`
	width: 100%;
	min-height: 100%;
	display: flex;
	overflow: auto;
	align-items: center;
	flex-direction: column;
	line-height: normal;
	background-color: var(--bg-blue-dark);
`;

const RegisterContainer = styled.div`
	width: 80%;
	max-width: 800px;
	min-height: 100%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--bg-white);
`;

const Title = styled.div`
	padding: 1rem 0;
	font-size: 3rem;
	text-align: left;
	font-weight: 700;
`;

const SectionTitle = styled.div`
	padding: 1rem 0 0 0;
	font-size: 2rem;
	text-align: left;
	font-weight: 600;
`;

const Paragraph = styled.div`
	padding-bottom: 0.5rem;
`;

const Text = styled.div`
	padding-bottom: 0.25rem;
	font-size: 1.25rem;
	text-align: left;
	font-weight: 400;
	padding-bottom: 0.25rem;
`;

const EventPage = () => {
	const [presentEvent, setPresentEvent] = useRecoilState(presentEventState);
	const { eventId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			console.log("Fetching data...");
			try {
				const response = await fetch(`/.netlify/functions/get-event-by-id`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
					},
					body: JSON.stringify({ eventId: eventId }),
				});
				console.log("fetching completed");
				const data = await response.json();
				console.log("Data fetched successfully:", data);
				setPresentEvent(data);
			} catch (error) {
				console.log("Error fetching data:", error);
			}
		};

		fetchData();
	}, [eventId, setPresentEvent]);

	if (Object.keys(presentEvent).length === 0) {
		return (
			<Container>
				<RegisterContainer>
					<Skeleton variant="h1" width="50%" animation="wave" />
					<Skeleton variant="text" width="100%" animation="wave" />
					<Skeleton variant="text" width="100%" animation="wave" />
					<Skeleton variant="text" width="100%" animation="wave" />
				</RegisterContainer>
			</Container>
		);
	} else {
		const detailArr = presentEvent.introduction.detail.split("\n");
		return (
			<Container>
				<RegisterContainer>
					<Title>{presentEvent.name}</Title>
					<Paragraph>
						<Text>地點: {presentEvent.location.name}</Text>
						<Text>地址: {presentEvent.location.address}</Text>
						<Text>
							活動開始時間: {presentEvent.eventDate.begDate}{" "}
							{presentEvent.eventDate.begTime}
						</Text>
						<Text>
							活動結束時間: {presentEvent.eventDate.endDate}{" "}
							{presentEvent.eventDate.endTime}
						</Text>
						<Text>募集截止日期: {presentEvent.applyDate.endDate}</Text>
						<Text>{presentEvent.introduction.brief}</Text>
					</Paragraph>
					<SectionTitle>活動詳細資訊</SectionTitle>
					<Paragraph>
						{detailArr.map((item, index) => {
							return <Text key={index}>{item}</Text>;
						})}
					</Paragraph>
					<Button variant="contained" color="success" fullWidth>
						Join NOW!
					</Button>
				</RegisterContainer>
			</Container>
		);
	}
};

export default EventPage;
