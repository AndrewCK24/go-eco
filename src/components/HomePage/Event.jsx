import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { ReactComponent as LocationIcon } from "../../icons/location.svg";
import { ReactComponent as ParticipantIcon } from "../../icons/userIcon.svg";

const Container = styled.div`
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
	grid-template-rows: repeat(2, 1fr) auto;
`;

const EventTextContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr auto;
`;

const EventDetailText = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	svg {
		width: 1rem;
		height: 1rem;
	}
`;

const EventTextContainer2 = styled.div`
	height: auto;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr auto;
`;

const JoinButton = styled(Link)`
	width: 80%;
	padding: 0.25rem;
	display: flex;
	justify-content: center;
	text-align: center;
	text-decoration: none;
	border-radius: 0.5rem;
	color: var(--primary-black);
	font-weight: 500;
	background-color: var(--bg-green-main);
`;

const Event = (prop) => {
	return (
		<Container backgroundColor={prop.backgroundColor}>
			<EventPicture src={prop.src} />
			<EventInfoContainer>
				<EventTitle>{prop.eventName}</EventTitle>
				<EventDetail>
					<EventTextContainer>
						<EventDetailText>{prop.date}</EventDetailText>
						<EventDetailText>{prop.time}</EventDetailText>
						<EventDetailText>
							<ParticipantIcon />
							50+
						</EventDetailText>
						{/* TODO:lifecycle */}
					</EventTextContainer>
					<EventTextContainer2>
						<JoinButton to="/RegisterPage">Join now!</JoinButton>
						<EventDetailText>
							<LocationIcon />
							{prop.location}
						</EventDetailText>
					</EventTextContainer2>
				</EventDetail>
			</EventInfoContainer>
		</Container>
	);
};

export default Event;
