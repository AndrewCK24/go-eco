import styled from "@emotion/styled";
import LogInInput from "./LogInInput";
const LogInInputSet = styled.div`
    gap: 2rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;
const LogInText2 = styled.div`
    gap: 1rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`;
const LogInButtonSet2 = styled.div`
    margin-top: 5%;
    gap: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LogInButtonStyle2 = styled.button`
    width: 80%;
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    border-radius: 1rem;
    justify-content: center;
    color: white;
    background-color: black;
`;

function LogInTable(prop){
    return(<div>
        <LogInInputSet>
            <LogInInput default={prop.default1} />
            <LogInText2>
            <LogInInput default={prop.default2} />
                <a href="#page">Forgot Password?</a>
            </LogInText2>
        </LogInInputSet>
       <LogInButtonSet2>
           <LogInButtonStyle2>Sign In</LogInButtonStyle2>      
            <div> Not a Member yet? </div>   
            <a href="#page"> Sign up</a>
       </LogInButtonSet2>   
    </div>
    )
}
export default LogInTable;