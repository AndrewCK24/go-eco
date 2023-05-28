import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

const UserSideBar = () => {
    return(
    <SideBar>
        <TopSide>
            <SideRow></SideRow>
            <SideRow>
            <img src="/assets/packageIcon.svg"/>
               &nbsp;My activities
            </SideRow>
        </TopSide>
        <BottomSide>
            <SideRow>
            <img src="/assets/settingIcon.svg"/>
            &nbsp;Settings
            </SideRow>
            <SideRow to="/">
            <img src="/assets/logoutIcon.svg"/>
            &nbsp;Logout
            </SideRow>
        </BottomSide>
    </SideBar>
    )
}
export default UserSideBar;