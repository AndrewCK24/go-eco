import styled from "@emotion/styled";
const Event = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 15rem;
  background-color: rgba(179, 230, 193, 0.4300000071525574);
`;


const Recycle = (prop) =>{
    return(<div className="Event">
		<Event></Event>
		<div className="EventName">{prop.eventName}</div>
		<div className="EventLocation">{prop.location}</div>
		<div className="JoinButton">
			<div className="JoinTextStyle">Join now!</div>
		</div>
		<div className="CurrentParticipants">50+</div>
        {/* TODO:lifecycle */}
		<div className="time">
			<div className="TimeText">{prop.time}</div>
		</div>
		<div className="date">
			<div className="DateText">{prop.date}</div>
		</div>
		<img
			src="/assets/userIcon.svg"
			alt="user1819"
			className="user"
		/>
		<img
			src="/assets/maptag.svg"
			alt="maptag1820"
			className="maptag"
		/>
		<img
			src={prop.src}
			alt="Screenshot20230412at035511821"
			className="Picture"
		/>
	</div> 
    )
}
export default Recycle;