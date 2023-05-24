import styled from "@emotion/styled";
import Project from "../components/EventCreatePage/Project";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const EventCreateContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TopBlock = styled.div`
	width: 100%;
	display: grid;
    grid-template-columns: 1fr 1fr;
	border-radius: 1.5rem;
	background-color: rgba(213, 217, 8, 0.17000000178813934);
`;

const LeftTitleText = styled.div`
	display: flex;
	align-items: flex-start;
	font-size: 3rem;
	font-weight: 700;
	padding: 5%;
`;

const RightTitleText = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	font-size: 2rem;
	font-weight: 700;
	padding: 5%;
`;

const RightColumnText = styled.div`
	width:100%;
	display: grid;
	grid-template-rows: 1fr auto;
	font-weight: 600;
`;
const RightColumnText2 = styled.div`
	font-size: 1.75rem;
`;

const TitleText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 3rem;
	font-weight: 700;
	margin: 2% 2%;
`;

const Proposals = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 5%;
`;

const BottomBlock = styled.div`
	display: grid;
	grid-template-rows: 1fr auto;
	color: rgba(0, 0, 0, 1);
	font-size: 2rem;
    font-weight: 700;
	margin-bottom: 5%;
`;

const EventCreatePage = () => {
	return (
		<Container>
			<EventCreateContainer>
				<TopBlock>
					<LeftTitleText>
						Proposal
						<br />
						<br />
						Make things happen!
					</LeftTitleText>	
					<RightTitleText>
						<RightColumnText>
							<div>Successful proposal</div>
							<RightColumnText2>5000+</RightColumnText2>
						</RightColumnText>
						<RightColumnText>
							<div>Eco activities</div>
							<RightColumnText2>1000+</RightColumnText2>
						</RightColumnText>
						<RightColumnText>
							<div>Active volunteers</div>
							<RightColumnText2>800+</RightColumnText2>
						</RightColumnText>		
					</RightTitleText>
				</TopBlock>
				<TitleText>Create your proposal</TitleText>
				<Proposals>
					<Project 
					backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
					Text1="Single activity"
					Text2="For only one time"
					/>
					<Project 
					backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
					Text1="Longterm project"
					Text2="For continuous"
					/>
				</Proposals>
				<BottomBlock>
					<TitleText>FAQ</TitleText>
					<div>
						Is there a time limit for fundraising?
						<br /><br /><br /><br />
						Is there a limit to fundraising goals?
						<br /><br /><br /><br />
						Do I need to pay to start a project?
						<br /><br /><br /><br />
						The fundraising project I launched is successful,when will I get the
						sponsorship money?
						<br /><br /><br /><br />
						</div>
				</BottomBlock>
			</EventCreateContainer>
		</Container>
	);
};

export default EventCreatePage;



