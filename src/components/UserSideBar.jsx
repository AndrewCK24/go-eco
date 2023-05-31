import styled from "@emotion/styled";
import { Link, NavLink} from "react-router-dom";
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

const SideLink = styled(Link)`
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
  background-color: var(--bg-white);
`;

const UserSideBar = () => {
  const [check,setLogOut] = useState(false)
    return(
    <SideBar>
        <TopSide>
            <SideLink to="/userpage">
              <img src="/assets/homeIcon.svg"/>&nbsp;UserPage
            </SideLink>
            <SideLink to="/userpage/MyActivity">
              <img src="/assets/packageIcon.svg"/>&nbsp;My activities
            </SideLink>
        </TopSide>
        <BottomSide>
            <SideLink to="/">
              {/* TODO:SettingPage */}
              <img src="/assets/settingIcon.svg"/>&nbsp;Settings
            </SideLink>
            <SideLink>
              <LogOut onClick={()=> setLogOut(true)}> 
                <img src="/assets/logoutIcon.svg"/>&nbsp;Logout
              </LogOut>
            </SideLink>
        </BottomSide>
        <LogOutCheck trigger={check} setLogOut={setLogOut}/>
    </SideBar>
    )
}
export default UserSideBar;


const LogOutCheck = (prop) =>{
  return (prop.trigger)?(
    <LogOutWindow>
      <LogOutWindowRow1>Are you sure to logout?</LogOutWindowRow1>
      <LogOutWindowRow2>
        <button style={{fontSize: '2.75rem',fontWeight: '500'}}
        onClick>Yes</button>
        {/* TODO: Logout implement  */}
        <button 
        style={{fontSize: '2.75rem',fontWeight: '500'}} 
        onClick={()=>prop.setLogOut(false)}>No</button>
      </LogOutWindowRow2>
    </LogOutWindow>
  ):"";
}

const LogOutWindow = styled.div`
  top: 30%;
  left: 27.5%;
  width: 40%;
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

const LogOutWindowRow1 = styled.div`
  font-size:3rem;
  font-weight: 700;
`;

const LogOutWindowRow2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
`;
