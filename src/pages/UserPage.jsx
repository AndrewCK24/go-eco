import styled from "@emotion/styled";
import UserSideBar from "../components/UserSideBar";

const Container = styled.div`
  width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
  margin-bottom: 2%;
`;

const UserPageContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns:1fr 2fr 1fr;
  align-items: center;
  flex-direction: column;
`;

const UserInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows:1fr auto auto;
  gap: 1rem;
`;

const NextEventNotify = styled.div`
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

const EventBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`;
const EventBox = styled.div`
  flex: 16rem;
	max-height: 16rem;
	min-height: 8rem;
  display: grid;
  grid-template-rows:1fr 2fr;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--bg-blue-main);
`;

const Title = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 700;
`;

const Text = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Text2 = styled.div`
  display: flex;
  width: 100%;
  font-size: 3rem;
  font-weight: 700;
  justify-content: center;
  text-align: center;
`;

const UserPage = (prop) => {
  return (
    <Container>
      <UserPageContainer>
      <UserSideBar/>
        <UserInfo>
          <NextEventNotify>
              <NextEventLeftCol>
                <Title>Next - {prop.name}</Title>   
                <Text>Date - {prop.date}</Text>
                <Text>Time - {prop.time}</Text>
                <Text>Destination - {prop.destination}</Text>
              </NextEventLeftCol>
              {/* TODO: EventDetail change with event */}
              <img src="/assets/cleanUpPicture4.png"
              style={{width:'100%', height:'auto'}}
              />
              {/* TODO: EventPicture change with event*/}
          </NextEventNotify>
          <Title>My achievement</Title>
          <EventBoxContainer>
            <EventBox>
              <Text>Event participated:</Text>
              <Text2>Number1</Text2>
            </EventBox>
            <EventBox>
              <Text>Number of recycle:</Text>
              <Text2>Number2</Text2>
            </EventBox>  
            <EventBox>
              <Text>Number of cleanUp:</Text>
              <Text2>Number3</Text2>
            </EventBox>
            {/* TODO: eventNumber record */}
          </EventBoxContainer>
        </UserInfo>      
      </UserPageContainer>
    </Container> 
  );
};

export default UserPage;
