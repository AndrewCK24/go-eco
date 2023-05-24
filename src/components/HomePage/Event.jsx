import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { ReactComponent as LocationIcon } from "../../icons/location.svg";
import { ReactComponent as ParticipantIcon } from "../../icons/userIcon.svg";

const Container = styled(Link)`
	color: var(--text-black);
	text-decoration: none;
	display: grid;
	grid-template-rows: auto 1fr;
	border-radius: 1rem;
	background-color: ${(prop) => prop.backgroundColor};
`;

const EventPicture = styled.img`
	width: 90%;
	padding: 5% 5% 0% 5%;
	border-radius: 1rem;
`;

const EventInfoContainer = styled.div`
	width: 90%;
	padding: 0% 5% 5% 5%;
	display: grid;
	grid-template-rows: auto 1fr;
`;

const EventTitle = styled.div`
	padding: 0.5rem 0;
	font-size: 1.25rem;
	font-weight: 700;
	color: var(--text-black);
`;

const EventDetail = styled.div`
	align-items: center;
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: repeat(2, 1fr);
`;

const EventDetailText = styled.div`
	color: var(--text-gray);
	display: flex;
	flex-direction: row;
	align-items: center;
	svg {
		width: 1rem;
		height: 1rem;
	}
`;

// const JoinButton = styled(Link)`
// 	width: 80%;
// 	padding: 0.25rem;
// 	display: flex;
// 	justify-content: center;
// 	text-align: center;
// 	text-decoration: none;
// 	border-radius: 0.5rem;
// 	color: var(--primary-black);
// 	font-weight: 500;
// 	background-color: var(--bg-green-main);
// `;

const Event = (prop) => {
	return (
		<Container to="/RegisterPage" backgroundColor={prop.backgroundColor}>
			<EventPicture src={prop.src} />
			<EventInfoContainer>
				<EventTitle>{prop.eventName}</EventTitle>
				<EventDetail>
					<EventDetailText>{prop.date}</EventDetailText>
					<EventDetailText>
						<ParticipantIcon />
						250+
					</EventDetailText>
					{/* TODO:lifecycle */}
					{/* <JoinButton to="/RegisterPage">Join now!</JoinButton> */}
					<EventDetailText>{prop.time}</EventDetailText>
					<EventDetailText>
						<LocationIcon />
						{prop.location}
					</EventDetailText>
				</EventDetail>
			</EventInfoContainer>
		</Container>
	);
};

export default Event;
