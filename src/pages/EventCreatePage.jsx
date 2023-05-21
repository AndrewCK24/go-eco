import styled from "@emotion/styled";
import Single from "../components/EventCreatePage/Single";

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const EventCreateContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TopBlock = styled.div`
	border-radius: 1.5rem;
	background-color: rgba(213, 217, 8, 0.17000000178813934);
	display: grid;
    grid-template-columns: 1fr 1fr;
`;

const LeftText = styled.div`
	font-size: 3rem;
	font-weight: 700;
	display: flex;
	align-items: flex-start;
`;

const RightText = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr auto;
`;

const Proposals = styled.dev`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const TextBlock = styled.div`
	display: grid;
	grid-template-rows: 1fr auto;
	color: rgba(0, 0, 0, 1);
	font-size: 2rem;
    font-weight: 700;
`;


const EventCreatePage = () => {
	return (
		<Container>
			<EventCreateContainer>
				<TopBlock>
					<LeftText>
						Proposal
						<br />
						Make things happen!
					</LeftText>
					<RightText>
						<div>5000+</div>
						<div>Successful proposal</div>
						<div>1000k+</div>
						<div>Eco activities</div>
						<div>800k+</div>
						<div>Active volunteers</div>
					</RightText>
				</TopBlock>
					<div>Create your proposal</div>
					<Proposals>
						
					</Proposals>
				<TextBlock>
				<div>FAQ</div>
				<div>
					Is there a time limit for fundraising?
					<br />
					<br />
					Is there a limit to fundraising goals?
					<br />
					<br />
					Do I need to pay to start a project?
					<br />
					<br />
					The fundraising project I launched is successful,when will I get the
					sponsorship money?
				</div>
				</TextBlock>
			</EventCreateContainer>
		</Container>	
	);
};

export default EventCreatePage;
