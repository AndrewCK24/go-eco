import styled from "@emotion/styled";
import Hero from "../components/HomePage/Hero";
import Event from "../components/HomePage/Event";

const Container = styled.div`
	width: 100%;
	display: flex;
	overflow: auto;
	align-items: center;
	flex-direction: column;
	margin-bottom:3%;
`;

const EventContainer = styled.section`
	width: 90%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: auto 1fr;
	grid-gap: 3rem;
`;

const SectionTitle = styled.div`
	grid-column: 1 / 5;
	grid-row: 1 / 2;
	font-size:  2rem;
  	font-style: Bold;
  	font-family: Poppins;
  	font-weight: 700;
`;

const EventTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items:flex-start;
`;
// const Title2 = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items:flex-end;
// 	font-size: 1rem;
// `;

const FeedBackContainer = styled.section`
	width: 90%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr auto;
	grid-gap: 2rem;
	padding: 1rem;
`;

const FeedBackBlock = styled.div`
	display: flex;
	border-radius: 1rem;
	background-color: rgba(180, 221, 231, 0.5);
`; 

const FeedBack = styled.div`
	color: rgba(30, 30, 30, 0.75);
	font-size: 1rem;
	font-style: Medium;
	font-family: Poppins;
	font-weight: 500;
	line-height: normal;
	margin: 5%;
`;

const HomePage = () => {
	return (
		<Container>
			<Hero />
			<EventContainer>
				<SectionTitle>
					<EventTitle>Just go eco NOW!</EventTitle>
					{/* FIXME:title position need to be modified */}
					{/* <Title2>View All</Title2> */}
				</SectionTitle>
				<Event
					eventName="Plant conservation"
					location="Chiayi county"
					time="11:00 AM"
					date="04.16.2023"
					src="/assets/recyclePicture1.png"
					backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
				/>	
				<Event
					eventName="Event reusing"
					location="Taipei City"
					time="10:00 AM"
					date="04.22.2023"
					src="/assets/recyclePicture2.png"
					backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
				/> 
				<Event
					eventName="Kitchen waste reuse"
					location="Yilan county"
					time="02:00 PM"
					date="05.06.2023"
					src="/assets/recyclePicture3.png"
					backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
				/>
				<Event
					eventName="Garbage reuse way"
					location="Kaohsiung City"
					time="03:00 PM"
					date="05.11.2023"
					src="/assets/recyclePicture4.png"
					backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
				/>
			</EventContainer>
			<EventContainer>
				<SectionTitle>
					<EventTitle>Let’s make our planet better!</EventTitle>
					{/* <Title2>View All</Title2> */}
				</SectionTitle>
				<Event
					eventName="Mountain cleaning"
					location="Yilan county"
					time="08:00 AM"
					date="04.15.2023"
					src="/assets/cleanUpPicture1.png"
					backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
				/>
				<Event
					eventName="Beach Event"
					location="Tainan City"
					time="07:00 AM"
					date="05.06.2023"
					src="/assets/cleanUpPicture2.png"
					backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
				/>
				<Event
					eventName="Ｗetlands Event"
					location="Taichung City"
					time="05:00 PM"
					date="04.25.2023"
					src="/assets/cleanUpPicture3.png"
					backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
				/>
				<Event
					eventName="Beach Event"
					location="New Taipei City"
					time="12:00 PM"
					date="04.17.2023"
					src="/assets/cleanUpPicture4.png"
					backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
				/>
			</EventContainer>
			<FeedBackContainer>
				<SectionTitle>What’s volunteers’ feedback?</SectionTitle>
				<FeedBackBlock>
					<FeedBack>
					Beach Events are a great way to protect the environment and prevent
					harm to marine life by removing trash and debris from beaches.
					Participating in a beach Event is a rewarding experience that allows
					you to make a positive impact on the environment, connect with my
					community.
					</FeedBack>
				</FeedBackBlock>
				<FeedBackBlock>
					<FeedBack>
					Being eco-friendly means adopting behaviors that are sustainable and
					have a minimal impact on the environment. This includes reducing
					waste, conserving resources, and using environmentally friendly
					products and practices.
					</FeedBack>
				</FeedBackBlock>
			</FeedBackContainer>
				{/*<div className="frame77-text125">
					Beach Events are a great way to protect the environment and prevent
					harm to marine life by removing trash and debris from beaches.
					Participating in a beach Event is a rewarding experience that allows
					you to make a positive impact on the environment, connect with my
					community.
				</div>
				<div className="frame77-group9">
					<img
						src="/assets/vector1975.svg"
						alt="Vector1975"
						className="frame77-vector"
					/>
					<img
						src="/assets/unsplash5aguycwpjwremovebgpreview1976-z7m-300h.png"
						alt="unsplash5aGUyCWPJwremovebgpreview1976"
						className="frame77-unsplash5a--uy-cw-jwremovebgpreview"
					/>
				</div>
				<div className="frame77-frame46">
					<div className="frame77-text127">John Kenny</div>
					<div className="frame77-text129">The HR in Google</div>
				</div>
			</div>
			<div className="frame77-frame50">
				<div className="frame77-text131">
					Being eco-friendly means adopting behaviors that are sustainable and
					have a minimal impact on the environment. This includes reducing
					waste, conserving resources, and using environmentally friendly
					products and practices.
				</div>
				<div className="frame77-frame461">
					<div className="frame77-text133">Yara van dovan</div>
					<div className="frame77-text135">Doctor</div>
				</div>
				<div className="frame77-group10">
					<img
						src="/assets/vector1975.svg"
						alt="Vector1986"
						className="frame77-vector1"
					/>
					<img
						src="/assets/unsplasho3ymvt7wf9uremovebgpreview1987-lpr4-200w.png"
						alt="unsplashO3ymvT7Wf9Uremovebgpreview1987"
						className="frame77-unsplash-o3ymv-t-wf-uremovebgpreview"
					/>
				</div>
			</div> */}
		</Container>
	);
};

export default HomePage;
