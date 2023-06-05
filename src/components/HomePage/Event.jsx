import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { ReactComponent as DateIcon } from "../../icons/date.svg";
import { ReactComponent as TimeIcon } from "../../icons/time.svg";
import { ReactComponent as LocationIcon } from "../../icons/location.svg";
import { ReactComponent as ParticipantIcon } from "../../icons/participant.svg";

const Container = styled(Link)`
	width: 100%;
	/* padding: 0.5rem; */
	color: var(--text-black);
	text-decoration: none;
	display: grid;
	grid-template-rows: auto 1fr;
	border-radius: 1rem;
	/* TODO: 改用 themeProvider 變更背景顏色 */
	background-color: ${(prop) => prop.backgroundColor};
`;

const EventPicture = styled.img`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 90%;
	height: auto;
	padding: 5%;
	border-radius: 1rem;
`;

// const EventInfoContainer = styled.div`
// 	width: 90%;
// 	padding: 0% 5% 5% 5%;
// 	display: grid;
// 	grid-template-rows: auto 1fr;
// `;

const EventTitle = styled.div`
	padding: 0.5rem 0.5rem;
	font-size: 1.25rem;
	font-weight: 700;
	color: var(--text-black);
`;

const EventDetail = styled.div`
	padding: 0.5rem;
	align-items: center;
	display: flex;																																										
	flex-direction: row;
	flex-wrap: wrap;
	/* grid-template-rows: auto auto; */
	/* grid-template-columns: repeat(2, 1fr); */
`;

const EventDetailText = styled.div`
	color: var(--text-gray);
	padding-left: 0.25rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.25rem;
	svg {
		width: 1rem;
		height: 1rem;
	}
`;

const Event = (prop) => {
	// TODO: 設定 onClick 事件，點擊後跳轉到活動詳情頁面

	return (
		<Container to="/registerpage" backgroundColor={prop.backgroundColor}>
			{/* <EventPicture src={prop.src} /> */}
			{/* <EventInfoContainer> */}
				<EventTitle>{prop.eventName}</EventTitle>
				<EventDetail>
					<EventDetailText>
						<DateIcon />
						{prop.date}
					</EventDetailText>
					<EventDetailText>
						<ParticipantIcon />
						250+
					</EventDetailText>
					{/* TODO:lifecycle */}
					<EventDetailText>
						<TimeIcon />
						{prop.time}
					</EventDetailText>
					<EventDetailText>
						<LocationIcon />
						{prop.location}
					</EventDetailText>
				</EventDetail>
			{/* </EventInfoContainer> */}
		</Container>
	);
};

export default Event;
