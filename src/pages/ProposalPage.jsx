import styled from "@emotion/styled";
import "../../pageCSS/ProposalPage.css";

const Container = styled.div`
  width: 100%;
	display: flex;
	overflow: auto;
	align-items: center;
	flex-direction: column;
	margin-bottom:3%;
`;

const ProposalContainer = styled.div`
  width: 80%;
	gap: 1rem;
  top: 15%;
  display: flex;
  padding: 3rem;
  border-radius: 2rem;
  border-style: solid;
  border-color: green;
  flex-direction: column;
  background-color: white;
`;
const Line1 = styled.hr`
  border-top: solid rgba(107, 188, 129, 1);
  width: 23%;
`;
const Line2 = styled.hr`
  border-top: solid rgba(180, 231, 194, 1);
  width: 100%;
`;

const Row = styled.div`
  color: rgba(0, 0, 0, 1);
  text-align: left;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const TextArea = styled.textarea`
  border-color: rgba(0, 0, 0, 0.3);
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 0.5rem;
  background-color: rgba(217, 217, 217, 0.3);
  resize: none;
  height: ${props => (props.height)};

`;

const Title = styled.div`
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  
`;
const LeftBlock = styled.div`
  color: rgba(0, 0, 0, 1);
  width:13%;
  font-size: 1rem;
  text-align: left;
  font-weight: 600;
`;
const RightBlock = styled.div`
  color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  width:85%;
  text-align: left;
  font-weight: 600;
`;


const Text1 = styled.span`
  color: rgba(0, 0, 0, 0.6499999761581421);
  font-size: 1rem;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
`;
const Text2 = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
`;

const CheckBox = styled.input`
  
`;
const CheckBoxLabel = styled.label`
  
`;
const Button = styled.button`
  border-color: rgba(89, 151, 106, 1);
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 0.3rem;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  background-color: white;
  color: rgba(89, 151, 106, 1);
  padding: 0.7rem 1rem;
`;
const RowContainer = (prop) => {
	return (
		<Row>
          <LeftBlock>{prop.leftText}</LeftBlock>
          <RightBlock>
            <TextArea height={prop.height}/>
            <Text2>{prop.rightText}</Text2>
            
          </RightBlock>
    </Row>
	);
};
const ProposalPage = () => {
  return (
    <Container>
      <Title>Create your proposal</Title>
      <Line1/>
      <br/><br/>
      <ProposalContainer>
      <RowContainer leftText="Real name" rightText="Proposers must use their real names to register as members, Gee Gee does not accept anonymous proposals or proposals using other people's names. If the proposer is not an individual, the team representative can first register a team account with the team name, and then invite the team members' respective member accounts to join the collaboration through Team Settings."/>
      <Line2/>
      <RowContainer leftText="Email" rightText="Please make sure that your mailbox address is correct, otherwise tsk
            tsk will not be able to contact you. If there is a mistake, please
            go to your member page to modify it."/>
      <Line2/>
      <RowContainer leftText="Start time"/>
      <Line2/>
      <RowContainer leftText="End time"/>
      <Line2/>
      <RowContainer leftText="Classification"/>
      <Line2/>
      <RowContainer leftText="Project name"/>
      <RowContainer leftText="Brief introdution" height="5rem"/>
      <RowContainer leftText="Cover Photo" rightText="Please upload an image smaller than 1MB. The recommended size is
            1200 x 675 pixels (16:9). The cover image can be edited and modified
            before the project goes live."/>
      <RowContainer leftText="Introduction" height="20rem" rightText="Please tell us the story about your project and why people should
            support it. (minimum 350 words)Please note: tsk tsk must have enough
            information to review the plan. If you provide too little
            information, or tsk tsk cannot evaluate the authenticity and
            feasibility of the plan, the plan will not be put on the shelves."/>
      <Line2/>
      <RowContainer leftText="Maximum number of volunteers"/>
      <Line2/>
      <RowContainer leftText="Minimum number of volunteers"/>
      <Line2/>
      <RowContainer leftText="Destination"/>
      <RowContainer leftText="Meet point"/>
      <Line2/>
      <RowContainer leftText="Relate page" rightText="The purpose of this page is to allow the project department to review
          the authenticity and feasibility of your plan, and to allow sponsors
          to better understand your plan, so please be sure to provide it. If
          there is no official website, the relevant webpage can also be
          temporarily replaced by media reports or social media links (such as:
          Meta fans)."/>
      <Line2/>
      
        
        <Row>
          <LeftBlock>Terms of cooperation</LeftBlock>
          <RightBlock>
          <CheckBoxLabel>
            <CheckBox type="checkbox"/>
            <Text1>
            &emsp;Agreement to Proposal
            </Text1>
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBox type="checkbox"/>
            <Text1>
            &emsp;The proposer (and the legal representative) have fully understood and
            agreed to the rights and obligations of the terms of cooperation
            </Text1>
          </CheckBoxLabel>
          <Text2>
          Please confirm that you have read and agree to the terms of
            cooperation of Gee x Proposer ..
          </Text2>
          </RightBlock>
        </Row>

      </ProposalContainer>
      <br/>
      <Button>COMFIRM</Button>
    </Container>
  );
};

export default ProposalPage;
