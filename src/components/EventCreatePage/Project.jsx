import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.5rem;
    background-color: ${prop => prop.backgroundColor}
`;
// background-color: ${prop => prop.backgroundColor}

const TextContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    text-align: center;
    padding: 5%;
    color: rgba(30, 30, 30, 0.75);
`;

const Text1 = styled.div`
    font-size: 2rem;
    font-weight: 700;
`;
   
const Text2 = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
`;

function Project(prop){
    const style={
        textDecoration: 'none'
    };

    return(
    <Link to="/EventCreatePage/ProposalPage" style={style}>
        <Container backgroundColor={prop.backgroundColor}>
            <TextContainer>
                <Text1>{prop.Text1}</Text1>
                <Text2>{prop.Text2}</Text2>
            </TextContainer>
        </Container>    
    </Link>
    )
}
export default Project;