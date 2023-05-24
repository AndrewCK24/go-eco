import styled from "@emotion/styled";

const EventBox = styled.div`
	display: flex;
	flex-direction: column;
	grid-template-rows: auto 1fr;
	border-radius: 1rem;
	background-color: ${prop => prop.backgroundColor}
`;	

const EventPicture = styled.img`
	width: 100%;
	height: auto;
	border-radius: 1rem;
`;

const EventInfoContainer = styled.div`
	margin: 3.5%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const EventDetail = styled.div`
	width:100%;
	align-items: center;
	display: grid;
	grid-template-rows: repeat(2,1fr) auto;
	margin: 2%;
`;
const EventTitle = styled.div`
	width:100%;
	font-style: Bold;
 	text-align: left;
	font-size: 1.5rem;
  	font-family: Al Bayan;
  	font-weight: 700;
	color: rgba(37, 34, 34, 1);
`;
const EventTextContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3,1fr);
`;
const EventDetailText = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items:center;
`;
const EventTextContainer2 = styled.div`
	width: 100%;
	height: auto;
	display: grid;
	flex-direction: column;
	align-items:center;
	grid-template-columns: 1fr 1fr;
`; 
const JoinButton =styled.button`
	width: 80%;
	display: flex;
	text-align: center;
	border-radius: 0.5rem;
	font-family: Poppins;
	font-weight: 500;
	background-color: rgba(130, 174, 142, 1);
`;
const Event = (prop) => {
	return (
		<EventBox backgroundColor={prop.backgroundColor}>
			<EventInfoContainer>
				<EventPicture src={prop.src} />
				<EventDetail>
					<EventTitle>{prop.eventName}</EventTitle>
					<EventTextContainer>
						<EventDetailText>
							{prop.date}
						</EventDetailText>
						<EventDetailText>{prop.time}</EventDetailText>
						<EventDetailText>
							{/* <EventPicture src="/assets/userIcon.svg" /> */}50+
						</EventDetailText>
						{/* TODO:lifecycle */}
					</EventTextContainer>
				</EventDetail>
				<EventTextContainer2>
					<JoinButton>Join now!</JoinButton>
					<EventDetailText>
					{/* <EventPicture src="/assets/maptag.svg" /> */}{prop.location}
					</EventDetailText>
				</EventTextContainer2>
			</EventInfoContainer>
		</EventBox>
	);
};
export default Event;
