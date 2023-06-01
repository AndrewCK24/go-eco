import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import Geocode from "react-geocode";
import Map from "../components/Map";

const Container = styled.div`
    width: 100%;
    display: flex;
    overflow: auto;
    align-items: center;
    flex-direction: column;
    line-height: normal;
    background-color: #3C9DA4;
`;

const RegisterContainer = styled.div`
    width: 80%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
`;

const Title = styled.div`
    padding: 0.5rem 0.5rem;
    font-size: 3rem;
    font-style: Bold;
    text-align: left;
    font-weight: 700;
`;

const SectionTitle = styled.div`
    font-size: 2rem;
    font-style: SemiBold;
    text-align: left;
    font-weight: 600;
`;

const Paragrath = styled.div`
    font-size: 1.5rem;
    font-style: Regular;
    text-align: left;
    font-weight: 400;
`;

const JoinButton = styled(Link)`
    display: flex;
 	width: 80%;
 	margin: 2rem 2rem;
    padding: 1rem;
 	justify-content: center;
    font-size: 2rem;
 	text-align: center;
 	text-decoration: none;
 	border-radius: 0.5rem;
 	color: var(--primary-black);
 	font-weight: 600;
 	background-color: var(--bg-green-main);
 `;

var center = {};
Geocode.setApiKey("AIzaSyDJ3glifWE4FiuEm5ycid-1Upl--0IHTuo");
Geocode.setLanguage("zh-TW");
Geocode.setRegion("tw");
Geocode.fromAddress("淡水").then(// TODO: 更改位置
    (response) => {
        center = response.results[0].geometry.location;
})


const RegisterPage = () => {

    const containerStyle = {
        width: '60%',
        height: '400px'
    };

    return(
        <Container>
            <RegisterContainer>
                <Title>Beach Clean in Tamsui, New Taipei City</Title>
                <SectionTitle> 
                    Join one of our beach clean surveys and help keep Britain's
                    beaches beautiful and our ocean safe for wildlife.
                </SectionTitle>
                <Paragrath>
                    <div>Destination: Tamsui, New Taipei City</div>
                    <br />
                    <div>Date &amp; Time: 4 Jun 2023, 12:30 p.m. to 3:30 p.m.</div>
                    <br />
                    <div>Meet point: Tamsui MRT station</div>
                    <br />
                    <div>Capacity: 40 volunteers - 3 spaces left</div>
                    <br />
                    <div>Check on map: </div>
                    
                    <Map location="淡水"/>
                    {/* TODO:更改位置 */}

                    <br />
                    <div>
                        Members of the cross party group are invited alongside anyone
                        else interested in taking part in some marine litter citizen
                        science.
                    </div>
                    <br />
                    <br />
                    <div>
                        Catherine and Kirsty will hand out equipment and give a
                        briefing at 2.30 before heading down to the 100m stretch on
                        Cramond beach to work as a group to do a beach clean and
                        litter survey.
                    </div>
                    <br />
                    <br />
                    <div>
                    If you have any questions about the event please email
                    Catherine on catherine.gemmell@mcsuk.org
                    </div>
                </Paragrath>
                <SectionTitle>Also worth knowing…</SectionTitle>
                <Paragrath>
                    <div>
                        What to bring: We’d recommend you pack a rucksack with a few
                        essentials like sunscreen, waterproofs, hand sanitiser, and
                        perhaps some snacks and a drink (in a reusable bottle, of
                        course).
                    </div>
                    <br />
                    <br />
                    <div>
                        What to wear: If you're picking up litter with your hands it's
                        worth wearing a strong pair of gloves - like gardening gloves -
                        just to make sure you're protected. Sturdy shoes are a must for
                        protection too.
                    </div>
                    <br />
                    <br />
                    <div>
                        Under 16s: To comply with our insurance, volunteers under 16
                        will need to be accompanied by an adult who will be asked to
                        sign a parental / guardian consent form on the day by the beach
                        clean organiser.
                    </div>
                </Paragrath>
                <JoinButton>Join NOW!</JoinButton>
            </RegisterContainer>
        </Container>
    )
 }
export default RegisterPage;
