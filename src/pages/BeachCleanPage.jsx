import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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


const PageContainer = styled.div`
    width: 80%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
`;

const SectionTitle = styled.div`
    font-size: 2rem;
    font-style: SemiBold;
    text-align: left;
    font-weight: 600;
`;

const Paragraph = styled.div`
    font-size: 1.5rem;
    font-style: Regular;
    text-align: left;
    font-weight: 400;
`;


 const BeachCleanPage = () => {
    
    return (
		<Container>
            <LinkSection>
                <LinkContainer>
                    <LinkStyle to="/beachcleanpage">淨灘</LinkStyle>
                    <LinkStyle to="/recyclepage">回收</LinkStyle>  
                </LinkContainer>
            </LinkSection>
            <PageContainer>
                <SectionTitle> 為什麼要淨灘? </SectionTitle><br/>
                <Paragraph>
                淨灘活動是一種有助於讓參與者認識海洋污染原因和對生態的危害的方式。透過環境教育，我們能夠改變日常生活習慣，擴展學習的領域，減少海洋廢棄物對海洋生物造成的傷害，並減少人類對海洋的汙染。<br/><br/>

                根據最近在國際淨灘活動中所做的垃圾統計，海洋垃圾的兩大頭號殺手是免洗餐具和塑膠垃圾。僅僅撿拾到的塑膠瓶就能堆疊成高度達到8.4座台北101大樓；而免洗餐具的數量，根據每人每餐使用的計算方式，足夠使用近30年之久。這些廢棄物經過幾十年的時間也無法分解，不僅使人類與海洋之間產生隔閡，還迫使海洋生物們食用由人類製造的"垃圾食物"。<br/><br/>

                透過參與淨灘活動，我們能夠深入了解這些垃圾對環境的影響，並意識到我們每個人在日常生活中的作用。改變生活習慣，例如減少使用塑膠製品和免洗餐具，選擇可再利用的替代品，都是減少海洋污染的重要步驟。<br/><br/>

                此外，淨灘活動還能讓我們親身感受到海洋環境的美麗和脆弱性。透過實際行動，我們能夠以身作則，鼓勵他人參與保護海洋的努力。
                保護海洋環境是我們每個人的責任。透過淨灘活動，我們能夠增加對海洋污染的認識，減少海洋廢棄物的傷害，並為未來的世代創造一個更健康、更可持續的環境。讓我們一起行動，為保護我們珍貴的海洋資源出一分力。
                </Paragraph>
                <br/><br/>
                <SectionTitle>淨灘的目標與心態</SectionTitle><br/>
                <Paragraph>
                在淨灘的世界中，不存在著"沙灘不淨，誓不回家"的情況。事實上，對於解決海洋廢棄物問題來說，淨灘的效果是相對有限的。我們認為淨灘更重要的意義在於環境教育。正因如此，淨灘的重點應該放在如何安全地進行淨灘活動，並在活動中傳達並實踐減少垃圾源頭的理念。<br/><br/>

                我們應該以安全為前提，在能力範圍內進行淨灘，而不是超過負荷去清理廢棄物。淨灘活動並不要求我們完美地清理每一個角落，而是要確保每個參與者在安全、合理的狀況下完成淨灘。更重要的是，在活動結束後，我們能夠將所學應用於日常生活中，實際改變我們的行為。<br/><br/>

                淨灘的目的是喚起人們對海洋廢棄物問題的關注，進而激發行動。通過參與淨灘活動，我們能夠深入了解海洋廢棄物對環境和生物的危害，並認識到個人的作用和責任。這種意識的培養和行動的推動是環境教育的重要一環。<br/><br/>

                因此，淨灘活動的真正價值在於教育人們如何減少垃圾產生，從源頭上解決問題。透過宣傳垃圾分類和回收的重要性，提倡使用可再利用的產品，減少使用一次性塑料，我們能夠對海洋環境產生更持久的影響。<br/><br/>

                讓我們共同意識到淨灘活動的真正目的，並將其視為一個重要的環境教育機會。讓我們以安全和合理的方式參與淨灘活動，並在日常生活中堅持改變，逐步減少垃圾的產生。只有這樣，我們才能真正為海洋環境的保護做出實質。
                </Paragraph>
                <br/><br/>
                <SectionTitle>誰可以淨灘? </SectionTitle><br/>
                <Paragraph>
                任何人都可淨灘，淨灘活動一般可以分為個人發起以及組織發起，組織又有非營利組織發起的公益活動以及民間企業發起的企業社會責任活動。
                </Paragraph>
                <br/><br/>
                <SectionTitle>淨灘種類</SectionTitle><br/>
                <Paragraph>
                小型淨灘<br/>
                以清理小範圍海岸為目的，適合10人以下的親子家庭或朋友。<br/><br/>
                大型淨灘<br/>
                以清理大面積或高度汙染的海岸線為目地，適合數十人至千人的團體。
                </Paragraph>
                <br/><br/>
                <SectionTitle>淨灘裝備</SectionTitle><br/>
                <Paragraph>
                服裝<br/>
                遮陽寬沿帽、領巾或頭巾、短袖T恤＋抗UV袖套、麻布手套(防刺傷、割傷 )、長褲、包鞋 。<br/><br/>
                個人證件<br/>
                攜帶健保卡、身份證，若發生意外時可供辨明身份使用。<br/><br/>
                個人藥物<br/>
                活動現場除非有醫療人員，否則根據醫療法規不得提供處方用藥或指示用藥，因此如個人有固定用藥應自行準備、使用，也可自備簡易醫療用品，如有小傷口，可自行消毒簡易防護。<br/><br/>
                水壺<br/>
                自備重複使用之水壺，適時補充水份以避免熱傷害，也避免產生廢棄物。建議容量為500 c.c.以上。
                </Paragraph>
                <br/><br/>
                <SectionTitle>工具</SectionTitle><br/>
                <Paragraph>
                1. 計重器材：如需知道垃圾總重，可準備磅秤或電子秤等計重器材。<br/><br/>
                2. 醫藥箱：現場提供緊急處置使用，務必確認內容物齊全、未過期。<br/><br/>
                3. 寬口瓶罐：裝鐵釘、針頭、魚鉤、假餌等尖銳物品，以避免刺傷尖銳廢棄物。<br/><br/>
                4. 其他：鐵夾 ,工作手套 ,麻袋(耐重耐磨不易破) ,垃圾袋等等。

                </Paragraph>
                <br/><br/>
                <SectionTitle>相關安全守則</SectionTitle><br/>
                <Paragraph>
                1. 注意淨灘範圍的地形地貌，專注行走，以避免可能因環境不同而產生的拐傷、滑倒等風險。<br/><br/>
                2. 海灘廢棄物大致停留在潮線上或是後方防風林處，清除時也可以此區域為優先，但切勿太過靠近海面，同時勿追逐海面上廢棄物。<br/><br/>
                3. 如位處離海水較近或海浪可觸及的區域，請保持面向海面，並隨時注意海浪狀況，以保留充足的反應時間。<br/><br/>
                4. 避免徒手撿拾廢棄物，更應避免將手伸到看不淸楚的 位置撈廢棄物、或大動作用手狂掃、狂抓廢棄物。<br/><br/>
                5. 隨時注意腳下、周遭的環境，避免踩踏或碰觸到生物及危險物品。<br/><br/>
                6. 隨時注意天氣變化，如果聽到雷聲，應盡速離開沙灘、空曠地區，移動時也優先離開海水可觸及、或已潮濕的海灘範圍。

                </Paragraph>
                <br/><br/>
                <SectionTitle>淨灘大小事</SectionTitle><br/>
                <Paragraph>
                選擇固定海灘，長期淨灘與監測垃圾數據。以安全、熟悉、便利為選擇地點時優先的考量因素。除了確認退潮時間外，更需確認當時的天候狀況，嚴禁颱風來襲時期進行淨灘，日照太強或風勢較大時也應避免前往，並依個人身體狀況來進行淨灘。參照當日漲退潮狀況為妥善處理淨灘撿拾的垃圾，淨灘前先聯繫當地環保局，確認適當的垃圾放置地點。
                </Paragraph>
                <br/><br/>
                <SectionTitle>執行淨灘任務</SectionTitle><br/>
                <Paragraph>
                1. 淨灘目標物：以不可分解的人造廢棄物為主，貝殼、漂流木、生物屍體等可天然分解者不撿。<br/><br/>
                2. 撿拾廢棄物時，應全程穿戴手套，盡量使用夾子來夾取廢棄物。<br/><br/>
                3. 眼手合一，若要用手拿取廢棄物，不論是否穿戴手套，皆須看清楚廢棄物的樣貌再拿取，不可將手伸進看不清楚的區域，如沙中、岩縫中、消波塊間等。<br/><br/>
                4. 仔細注意所撿拾的廢棄物是否具有危險性，如：玻璃等易碎物品類、尖銳物品（鐵釘、刀具、針頭、魚鉤、假餌）、易爆物（信號彈、未爆彈）、壓縮氣體類、農藥類、大件網具等，屬於較具危險性的物品。<br/><br/>
                •易爆物：如是信號彈或未爆彈（呈現彈藥樣貌），保險起見可先於周圍示警，避免他人撿拾，並通報海巡及警方協助判定及處理，不建議直接撿拾。<br/><br/>
                •壓縮氣體類：海灘上常見項目為打火機、殺蟲劑罐大小之壓縮瓶、中小型瓦斯桶大小之冷媒桶，偶爾也可見大型壓縮氣體鋼瓶。由於海水可能造成瓶身銹蝕、長時間曝曬也可能增加瓶內壓力或塑膠脆化，故均具有一些風險性，如要撿拾須輕拿輕放，嚴禁拋摔。此類物品也建議可另外裝袋並示明內容物交給清潔隊，以避免清潔隊於後續廢棄物處理流程中受害。<br/><br/>
                •大件網具：淸運須事先確認淸潔隊車輛是否可配合淸運。此類大型垃圾通常被一般海浪再帶回海中的可能性也較低，除非有工具可以切割網具，否則還是以清除其他容易進到海中的廢棄物為主。此外，漁網中常會纏繞許多其他廢棄物，包含釣鉤等尖銳金屬物，因此不論是否穿戴手套，皆不可在未看清楚的情況下直接抓取、拉扯漁網。
                </Paragraph>
                <br/><br/>
                <SectionTitle>淨灘的根本之道</SectionTitle><br/>
                <Paragraph>
                淨灘除了達成清除海灘廢棄物的目的，更重要的是透過廢棄物監測，形成環境教育以及政策遊說的力量。2005年籌組的「台灣清淨海洋行動聯盟」（TOCA）；經過長時間的數據累積，2017年，公民團體再與環保署共同成立「台灣海洋廢棄物治理平台」，後續加入海保署、漁業署，希望除了淨灘，更能從源頭減量著手，加速並促成了台灣禁塑政策。<br/><br/>
                除了政策的推動，每一個人都是一份改變的力量！淨灘雖然可以避免海灘廢棄物流入海洋，但對於改善海洋廢棄物的問題來說，效果還是很有限。塑膠污染的問題看似很複雜，但其實也很簡單：既然海灘上的垃圾來自陸地的日常，那麼，就從陸地來解決海灘的狀況吧！在日常生活中「減垃圾」，更能從源頭減少廢棄物，連帶地，也會減少這些廢棄物進入環境的機會。<br/><br/>
                少用一個是一個，多用一次是一次。如果你正想買一杯手搖杯或站在便當店點餐，請記得帶上環保杯、食物袋、購物袋。 就算沒有「環保袋」，塑膠袋重複使用，也是很棒的一件事。

                </Paragraph>
                <br/><br/>
                <SectionTitle>參考資料</SectionTitle>
                <Paragraph>
                <a href="https://www.sow.org.tw/blog/20200601/41742">荒野保護協會-關於淨灘的二三事</a><br/>
                <a href="https://e-info.org.tw/node/224927">2020世界海洋日：《淨灘手冊》讓海乾淨 向海致敬 | 環境資訊中心</a>
                </Paragraph>
                

            </PageContainer>
        </Container>
    
	);
 };
 
 export default BeachCleanPage;