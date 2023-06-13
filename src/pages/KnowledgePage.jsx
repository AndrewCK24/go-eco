import styled from "@emotion/styled";
import { NavLink, Outlet } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    display: flex;
    overflow: auto;
    align-items: center;
    flex-direction: column;
    line-height: normal;
    background-color: #3C9DA4;
`;

const LinkSection = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    background-color:  #3C9DA4;
`;

const LinkContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

const LinkStyle = styled(NavLink)`
    width: 10rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    color: var(--text-white);
    padding: 0.25rem;
    background-color: var(--bg-gray);
    &.active {
		background-color: white;
        color: var(--text-black);
	}
`;

const KnowledgePage = () =>{
    return(
        <Container>
            <LinkSection>
                <LinkContainer>
                    <LinkStyle to="/knowledge" end>淨灘</LinkStyle>
                    <LinkStyle to="/knowledge/recycle">回收</LinkStyle>  
                </LinkContainer>
            </LinkSection>
            <Outlet/>
        </Container>  
    )
}
export default KnowledgePage;