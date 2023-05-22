import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

function Longterm(){
    const style={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '1.5rem',
        backgroundColor: 'rgba(180, 221, 231, 0.5)',
        textDecoration: 'none'
    };

    return(
    <Link to="/EventCreatePage/ProposalPage" style={style}>
        <TextContainer>
            <Text1>Longterm project</Text1>
            <Text2>For continuous</Text2>
        </TextContainer>
    </Link>
    )
}
export default Longterm;