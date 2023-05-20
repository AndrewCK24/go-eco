import styled from "@emotion/styled";
const LogInInputStyle = styled.input`
    gap: 2rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

function LogInInput(prop){
    return(<div>
        <LogInInputStyle defaultValue={prop.default}>{prop.value}</LogInInputStyle>
    </div>
    )
}
export default LogInInput;