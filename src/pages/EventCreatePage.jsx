import styled from "@emotion/styled";
import "../../pageCSS/EventCreatePage.css";
import Single from "../components/EventCreatePage/Single";
import Longterm from "../components/EventCreatePage/Longterm";

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
					<Longterm />
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
