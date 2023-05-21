import styled from "@emotion/styled";
import { useState } from "react";

const LogInInputFormContainer = styled.div`
    width:80%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LogInInputSet = styled.div`
    width: 100%;
    gap: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LogInInput = styled.input`
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
`;

const LogInText2 = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`;
const LogInButtonSet2 = styled.div`
    width: 100%;
    margin-top: 5%;
    gap: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LogInButtonStyle2 = styled.button`
    width: 90%;
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: white;
    background-color: black;
`;

function LogInInputForm(){

    const [email,setEmail] = useState(" Email");
    const [password,setPassword] = useState(" Password");

    return(
    <LogInInputFormContainer>
        <LogInInputSet>
            <LogInInput defaultValue={email} value={email} 
            onChange = { e => {setEmail(e.target.value)} }/>
            <LogInInput defaultValue={password} value={password} 
            onChange={ e => {setPassword(e.target.value)} }/>
        </LogInInputSet>
        <LogInButtonSet2>
            <LogInText2>
                <a href="">Forgot Password?</a>
            </LogInText2>
           <LogInButtonStyle2>Sign In</LogInButtonStyle2>      
            <div> 
                Not a Member yet? 
                <a href=""> Sign up</a>
            </div>   
       </LogInButtonSet2>   
    </LogInInputFormContainer>
    )
}
export default LogInInputForm;