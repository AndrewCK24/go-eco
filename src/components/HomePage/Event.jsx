import styled from "@emotion/styled";
const EventBox = styled.div`
	display: flex;
	flex-direction: column;
	grid-template-rows: auto 1fr
	border-radius: 15rem;
	background-color: orange;
`;
// ${prop => prop.backgroundColor}
const EventInfoContainer = styled.div`
	width: 90%;
	display: flex;
	overflow: auto;
	align-items: center;
	flex-direction: column;
`;
const EventPicture = styled.img`
	width: 100%;
	height: auto;
	border-radius: 1rem;
`;
const EventDetail = styled.div`
	width:90%;
	align-items: center;
	display: grid;
	grid-template-rows: repeat(3,1fr);
`;
const EventTitle = styled.div`
	width:100%;
	font-style: Bold;
 	text-align: left;
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
	background-color: rgba(130, 174, 142, 1);
`;
const JoinButton =styled.button`
	align-items: center;
	display: flex;
	align-items:flex-start;
	border-radius: 8rem;
  	background-color: rgba(130, 174, 142, 1);
  	height: auto;
	text-align: center;
	font-family: Poppins;
	font-weight: 500;
`;
const Event = (prop) => {
	return (
		<EventBox>
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
					<EventDetailText>
					{/* <EventPicture src="/assets/maptag.svg" /> */}{prop.location}
					</EventDetailText>
				</EventDetail>
				<JoinButton>Join now!</JoinButton>
			</EventInfoContainer>
		</EventBox>
	);
};
export default Event;
