import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
// import Map from "../components/Map";

import presentEventState from "../recoil/presentEventState";

const Container = styled.div`
	width: 100%;
	display: flex;
	overflow: auto;
	align-items: center;
	flex-direction: column;
	line-height: normal;
	background-color: var(--bg-blue-dark);
`;

const RegisterContainer = styled.div`
	width: 80%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--bg-white);
`;

const Title = styled.div`
	font-size: 3rem;
	text-align: left;
	font-weight: 700;
`;

const SectionTitle = styled.div`
	font-size: 2rem;
	text-align: left;
	font-weight: 600;
`;

const Paragraph = styled.div``;

const Text = styled.div`
	font-size: 1.25rem;
	text-align: left;
	font-weight: 400;
	padding-bottom: 0.25rem;
`;

const JoinButton = styled(Link)`
	display: flex;
	width: 80%;
	margin: 2rem 2rem;
	padding: 1rem;
	justify-content: center;
	font-size: 2rem;
	text-align: center;
	text-decoration: none;
	border-radius: 0.5rem;
	color: var(--primary-black);
	font-weight: 600;
	background-color: var(--bg-green-main);
`;

const EventPage = () => {
	const [presentEvent, setPresentEvent] = useRecoilState(presentEventState);
	const { eventId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			console.log("Fetching data...");
			try {
				const response = await fetch(
					`/.netlify/functions/findEventById/findEventById`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ eventId: eventId }),
					}
				);
				console.log("fetching completed");
				const data = await response.json();
				console.log("Data fetched successfully:", data);
				setPresentEvent(data);
			} catch (error) {
				console.log("Error fetching data:", error);
			}
		};

		fetchData();
	}, [eventId, setPresentEvent]);

	return (
		<Container>
			<RegisterContainer>
				<Title>Beach Clean in Tamsui, New Taipei City</Title>
				<SectionTitle>
					Join one of our beach clean surveys and help keep Britain's beaches
					beautiful and our ocean safe for wildlife.
				</SectionTitle>
				<Paragraph>
					<Text>Destination: Tamsui, New Taipei City</Text>
					<Text>Date & Time: 4 Jun 2023, 12:30 p.m. to 3:30 p.m.</Text>
					<Text>Meet point: Tamsui MRT station</Text>
					<div>Capacity: 40 volunteers - 3 spaces left</div>
					<div>Check on map: </div>
					<div>
						Members of the cross party group are invited alongside anyone else
						interested in taking part in some marine litter citizen science.
					</div>
					<div>
						Catherine and Kirsty will hand out equipment and give a briefing at
						2.30 before heading down to the 100m stretch on Cramond beach to
						work as a group to do a beach clean and litter survey.
					</div>
					<div>
						If you have any questions about the event please email Catherine on
						catherine.gemmell@mcsuk.org
					</div>
				</Paragraph>
				<SectionTitle>Also worth knowing…</SectionTitle>
				<Paragraph>
					<div>
						What to bring: We’d recommend you pack a rucksack with a few
						essentials like sunscreen, waterproofs, hand sanitizer, and perhaps
						some snacks and a drink (in a reusable bottle, of course).
					</div>
					<div>
						What to wear: If you're picking up litter with your hands it's worth
						wearing a strong pair of gloves - like gardening gloves - just to
						make sure you're protected. Sturdy shoes are a must for protection
						too.
					</div>
					<div>
						Under 16s: To comply with our insurance, volunteers under 16 will
						need to be accompanied by an adult who will be asked to sign a
						parental / guardian consent form on the day by the beach clean
						organizer.
					</div>
				</Paragraph>
				<JoinButton>Join NOW!</JoinButton>
			</RegisterContainer>
		</Container>
	);
};

export default EventPage;
