import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Hero from "../components/HomePage/Hero";
import Event from "../components/HomePage/Event";

const Container = styled.div`
	width: 100%;
	padding-bottom: 2rem;
	display: flex;
	overflow: auto;
	gap: 1.5rem;
	align-items: center;
	flex-direction: column;
`;

const EventSection = styled.section`
	width: 90%;
	display: grid;
	/* grid-template-columns: repeat(4, 1fr); */
	grid-template-rows: auto 1fr;
	grid-gap: 1rem;
`;

const SectionTitle = styled.div`
	padding: 0.5rem 0.5rem;
	/* grid-column: 1 / -1; */
	grid-row: 1 / 2;
	font-size: 2rem;
	font-weight: 700;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
`;

const ViewAll = styled(Link)`
	grid-column: 2 / 3;
	text-align: right;
	font-size: 1rem;
	text-decoration: none;
	color: var(--text-gray);
`;

const EventContainer = styled.div`
	width: 100%;
	/* padding: 0.5rem; */
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;
	overflow: scroll;
`;

const FeedBackSection = styled.section`
	width: 90%;
	display: grid;
	grid-template-rows: auto 1fr;
`;

const FeedBackContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1.25%;
`;
const FeedBack = styled.div`
	display: flex;
	border-radius: 1rem;
	background-color: var(--bg-blue-light);
	color: rgba(30, 30, 30, 0.75);
	font-size: 1rem;
	font-weight: 500;
	line-height: normal;
	padding: 5%;
`;

const HomePage = () => {
	return (
		<Container>
			<Hero />
			<EventSection>
				<SectionTitle>
					Just go eco NOW!
					<ViewAll to="/events">View All</ViewAll>
				</SectionTitle>
				<EventContainer>
					<Event
						eventName="Plant conservation"
						location="Chiayi county"
						time="11:00 AM"
						date="04.16.2023"
						backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
					/>
					<Event
						eventName="Event reusing"
						location="Taipei City"
						time="10:00 AM"
						date="04.22.2023"
						backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
					/>
					<Event
						eventName="Kitchen waste reuse"
						location="Yilan county"
						time="02:00 PM"
						date="05.06.2023"
						backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
					/>
					<Event
						eventName="Garbage reuse way"
						location="Kaohsiung City"
						time="03:00 PM"
						date="05.11.2023"
						backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
					/>
				</EventContainer>
			</EventSection>
			<EventSection>
				<SectionTitle>
					Let’s make our planet better!
					<ViewAll to="/events">View All</ViewAll>
				</SectionTitle>
				<EventContainer>
					<Event
						eventName="Mountain cleaning"
						location="Yilan county"
						time="08:00 AM"
						date="04.15.2023"
						backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
					/>
					<Event
						eventName="Beach Event"
						location="Tainan City"
						time="07:00 AM"
						date="05.06.2023"
						backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
					/>
					<Event
						eventName="Ｗetlands Event"
						location="Taichung City"
						time="05:00 PM"
						date="04.25.2023"
						backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
					/>
					<Event
						eventName="Beach Event"
						location="New Taipei City"
						time="12:00 PM"
						date="04.17.2023"
						backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
					/>
				</EventContainer>
			</EventSection>
			<FeedBackSection>
				<SectionTitle>What’s volunteers’ feedback?</SectionTitle>
				<FeedBackContainer>
				<FeedBack>
					Beach Events are a great way to protect the environment and prevent
					harm to marine life by removing trash and debris from beaches.
					Participating in a beach Event is a rewarding experience that allows
					you to make a positive impact on the environment, connect with my
					community.
				</FeedBack>
				<FeedBack>
					Being eco-friendly means adopting behaviors that are sustainable and
					have a minimal impact on the environment. This includes reducing
					waste, conserving resources, and using environmentally friendly
					products and practices.
				</FeedBack>
				</FeedBackContainer>	
			</FeedBackSection>
		</Container>
	);
};

export default HomePage;
