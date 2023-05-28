import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
`;

const UserPageContainer = styled.div`
  width: 50%;
  height: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
`;

const SideBar = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 1rem;
  grid-template-rows: repeat(6,1fr);
`;

const TopSide = styled.div`
  display: grid;
  grid-row: 1/2;
  align-items: center;
`;

const BottomSide = styled.div`
  display: grid;
  grid-row: 6/7;
  align-items: center;
`;

const SideRow = styled(Link)`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  color: var(--text-gray);
  text-decoration: none;
  place-items: center;
`;

const UserInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
`;

const NextEventNotify = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--bg-green-main);
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

const NextEventLeftCol = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  text-align: left;
`;

const EventRecord = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;

const EventRow1 = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 700;
`;

const EventRow2 = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 500;
`;


const UserPage = (prop) => {
  return (
    <Container>
      <UserPageContainer>
        <SideBar>
          <TopSide>
            <SideRow>

            </SideRow>
            <SideRow>
              <img src="../assets/packageIcon.svg"/>
              &nbsp;My activities
            </SideRow>
          </TopSide>
          <BottomSide>
            <SideRow>
              <img src="../assets/settingIcon.svg"/>
              &nbsp;Settings
            </SideRow>
            <SideRow to="/">
              <img src="../assets/logoutIcon.svg"/>
              &nbsp;Logout
            </SideRow>
          </BottomSide>
        </SideBar>
        <UserInfo>
          <NextEventNotify>
              <NextEventLeftCol>
                <EventRow1>Next - {prop.name}</EventRow1>   {/* TODO:EventName */}
                <EventRow2>Date - {prop.date}</EventRow2>
                <EventRow2>Time - {prop.time}</EventRow2>
                <EventRow2>Destination - {prop.destination}</EventRow2>
              </NextEventLeftCol>
              <img src="/assets/cleanUpPicture4.png"
              style={{width:'100%', height:'auto'}}
              />
              {/* TODO: EventPicture */}
          </NextEventNotify>
          <EventRecord>
              <EventRow1>My achievement</EventRow1>
              <EventRow2>Event participated:</EventRow2>
              <EventRow2>Number of recycle:</EventRow2>
              <EventRow2>Number of cleanUp:</EventRow2>
          </EventRecord>
        </UserInfo>      
      </UserPageContainer>
    </Container> 
  );
};

export default UserPage;
