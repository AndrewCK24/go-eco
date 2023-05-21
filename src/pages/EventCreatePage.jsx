import styled from "@emotion/styled";
import "../../pageCSS/EventCreatePage.css";
import Single from "../components/EventCreatePage/Single";


const EventCreatePage = () => {
	return (
		<div className="EventCreatePage">
			<div className="ECP_Container">
				<div className="ECP_YellowBlock">
					<div className="ECP_YBLeftText">
						Proposal
						<br />
						<br />
						Make things happen!
					</div>
					<div className="ECP_YBRightText">
						<div className="ECP_YBRightTextCol">
							<div className="ECP_YBRightTextRow1">5000+</div>
							<div className="ECP_YBRightTextRow2">Successful proposal</div>
						</div>
						<div className="ECP_YBRightTextCol">
							<div className="ECP_YBRightTextRow1">1000k+</div>
							<div className="ECP_YBRightTextRow2">Eco activities</div>
						</div>
						<div className="ECP_YBRightTextCol">
							<div className="ECP_YBRightTextRow1">800k+</div>
							<div className="ECP_YBRightTextRow2">Active volunteers</div>
						</div>
					</div>
				</div>
				<div className="ECP_Text1">Create your proposal</div>
				<div className="ECP_Proposals">
					<Single />
					<Single />
				</div>
				<div className="ECP_Text2">FAQ</div>
				<div className="ECP_Text3">
					Is there a time limit for fundraising?
					<br />
					<br />
					<br />
					<br />
					Is there a limit to fundraising goals?
					<br />
					<br />
					<br />
					<br />
					Do I need to pay to start a project?
					<br />
					<br />
					<br />
					<br />
					The fundraising project I launched is successful,when will I get the
					sponsorship money?
				</div>
			</div>
		</div>
	);
};

export default EventCreatePage;



// const Container = styled.div`
// 	width: 100%;
// 	display: flex;
// 	align-items: center;
// 	flex-direction: column;
// `;

// const EventCreateContainer = styled.div`
// 	width: 80%;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// `;

// const TopBlock = styled.div`
// 	border-radius: 1.5rem;
// 	background-color: rgba(213, 217, 8, 0.17000000178813934);
// 	display: grid;
//     grid-template-columns: 1fr 1fr;
// `;

// const LeftText = styled.div`
// 	font-size: 3rem;
// 	font-weight: 700;
// 	display: flex;
// 	align-items: flex-start;
// `;

// const RightText = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	grid-template-rows: 1fr auto;
// `;

// const Proposals = styled.dev`
// 	width: 100%;
// 	display: grid;
// 	grid-template-columns: 1fr 1fr;
// `;

// const TextBlock = styled.div`
// 	display: grid;
// 	grid-template-rows: 1fr auto;
// 	color: rgba(0, 0, 0, 1);
// 	font-size: 2rem;
//     font-weight: 700;
// `;


// const EventCreatePage = () => {
// 	return (
// 		<Container>
// 			<EventCreateContainer>
// 				<TopBlock>
// 					<LeftText>
// 						Proposal
// 						<br />
// 						Make things happen!
// 					</LeftText>
// 					<RightText>
// 						<div>5000+</div>
// 						<div>Successful proposal</div>
// 						<div>1000k+</div>
// 						<div>Eco activities</div>
// 						<div>800k+</div>
// 						<div>Active volunteers</div>
// 					</RightText>
// 				</TopBlock>
// 					<div>Create your proposal</div>
// 					<Proposals>
// 						<Single />
// 						<Single />
// 					</Proposals>
// 				<TextBlock>
// 				<div>FAQ</div>
// 				<div>
// 					Is there a time limit for fundraising?
// 					<br />
// 					<br />
// 					Is there a limit to fundraising goals?
// 					<br />
// 					<br />
// 					Do I need to pay to start a project?
// 					<br />
// 					<br />
// 					The fundraising project I launched is successful,when will I get the
// 					sponsorship money?
// 				</div>
// 				</TextBlock>
// 			</EventCreateContainer>
// 		</Container>	
// 	);
// };



