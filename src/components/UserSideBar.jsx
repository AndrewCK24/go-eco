import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";

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

const LogOut = styled.button`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  color: var(--text-gray);
  border: 0;
  place-items: center;
`;

const UserSideBar = () => {
  const [check,setLogOut] = useState(false)
    return(
    <SideBar>
        <TopSide>
            <SideRow></SideRow>
            <SideRow to="/">
              <img src="/assets/packageIcon.svg"/>&nbsp;My activities
            </SideRow>
        </TopSide>
        <BottomSide>
            <SideRow>
              <img src="/assets/settingIcon.svg"/>&nbsp;Settings
            </SideRow>
            <SideRow>
              <LogOut onClick={()=> setLogOut(true)}> 
                <img src="/assets/logoutIcon.svg"/>&nbsp;Logout
              </LogOut>
            </SideRow>
        </BottomSide>
        <LogOutCheck trigger={check} setLogOut={setLogOut}/>
    </SideBar>
    )
}
export default UserSideBar;


const LogOutCheck = (prop) =>{
  return (prop.trigger)?(
    <LogOutWimdow>
      <LogOutWimdowRow1>Are you sure to logout?</LogOutWimdowRow1>
      <LogOutWimdowRow2>
        <button style={{fontSize: '2.75rem',fontWeight: '500'}}
        onClick>Yes</button>
        {/* TODO: Logout implement  */}
        <button 
        style={{fontSize: '2.75rem',fontWeight: '500'}} 
        onClick={()=>prop.setLogOut(false)}>No</button>
      </LogOutWimdowRow2>
    </LogOutWimdow>
  ):"";
}

const LogOutWimdow = styled.div`
  top: 30%;
  width: 40%;
  padding: 30% 30%;
  height: 20%;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 2rem;
  justify-content: center;
  position: fixed;
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: var(--bg-white);
  border-style: solid;
	border-color: green;
  color: var(--text-black);
`;

const LogOutWimdowRow1 = styled.div`
  font-size:3rem;
  font-weight: 700;
`;

const LogOutWimdowRow2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
`;
