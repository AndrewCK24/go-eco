import styled from "@emotion/styled";
import UserSideBar from "../components/UserSideBar";
import Event from "../components/HomePage/Event";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1%;
`;

const MyActivityContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns:1fr 3fr 1fr;
    align-items: center;
    flex-direction: column;
`;

const ActivityRecord = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.5%;
`;

const SectionTitle = styled.div`
	padding: 1rem 1rem;
	font-size: 2rem;
	font-weight: 700;
	display: flex;
	align-items: center;
`;

const EventToBeDetermined = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: 1rem;
    background-color: var(--bg-blue-dark);
    color: var(--text-white);
    justify-content: center;
    font-size: 10rem;
`;

const MyActivity = () =>{
    return(
        <Container>
            <MyActivityContainer>
                <UserSideBar />
                <div>
                <SectionTitle>Activties Incoming:</SectionTitle>
                <ActivityRecord>
                    {/* TODO: Event */}
                    <Event
                    eventName="Plant conservation"
                    location="Chiayi county"
                    time="11:00 AM"
                    date="04.16.2023"
                    src="/assets/recyclePicture1.png"
                    backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
                    />
                    <Event
                    eventName="Mountain cleaning"
                    location="Yilan county"
                    time="08:00 AM"
                    date="04.15.2023"
                    src="/assets/cleanUpPicture1.png"
                    backgroundColor="rgba(179, 221, 230, 0.4300000071525574)"
                    />
                    <Event
                    eventName="Kitchen waste reuse"
                    location="Yilan county"
                    time="02:00 PM"
                    date="05.06.2023"
                    src="/assets/recyclePicture3.png"
                    backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
                    />
                    <EventToBeDetermined>...</EventToBeDetermined>
                </ActivityRecord>
                <SectionTitle>Activities Completed:</SectionTitle>
                <ActivityRecord>
                    {/* TODO: Event */}
                    <Event
                    eventName="Event reusing"
                    location="Taipei City"
                    time="10:00 AM"
                    date="04.22.2023"
                    src="/assets/recyclePicture2.png"
                    backgroundColor="rgba(179, 230, 193, 0.4300000071525574)"
                        />
                    <EventToBeDetermined>...</EventToBeDetermined>
                </ActivityRecord>
                </div>
            </MyActivityContainer>
        </Container>  
    )
};
export default MyActivity;