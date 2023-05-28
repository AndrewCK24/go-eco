import styled from "@emotion/styled";

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

const Paragraph = styled.div`
    font-size: 1.5rem;
    font-style: Regular;
    text-align: left;
    font-weight: 400;
`;


 const RecyclePage = () => {
    
    return (
		<Container>
            <RegisterContainer>
                
                <SectionTitle>資源回收目的</SectionTitle>
                <Paragraph>
                資源回收能預防浪費有潛在利用價值的資源、削減原料消耗，由此減少：能量消耗、空氣污染和水污染。收集本來要廢棄的材料，分解再製成新產品，或者是收集用過的產品，清潔、處理之後再出售。相對於垃圾遺棄，回收可以節省資源、降低溫室氣體排放。
                </Paragraph>
                <SectionTitle>環保6R</SectionTitle>
                <Paragraph>
                6R為垃圾減量之六項原則，分別為：<br/>
                Reduce：減少丟棄之垃圾量<br/>
                Reuse：重複使用容器或產品<br/>
                Repair：重視維修保養，延長物品使用壽命<br/>
                Refuse：拒用無環保觀念產品 <br/>
                Recycle：回收使用再生產品<br/>
                Recovery :（再生）指改變原料形態或其他物質結合，使再生資源產生功用之行為。例如沼氣發電、輪胎磨粉作為燃料，廢油回收做生質能源、廚餘回收做堆肥等。
                </Paragraph>
                <SectionTitle>回收項目</SectionTitle>
                <Paragraph>
                回收項目分別為平面類、立體類、其他大型家具家電類及廚餘，根據項目不同處理方式亦有不同。<br/>
                •平面類：各種乾淨舊衣物 ,廢紙類 ,塑膠袋類 ,舊書。<br/>
                •立體類：分為一般類與保麗龍。<br/>
                一般類資源物：各類瓶罐、紙容器、小家電、電腦主機、壓克力等等。<br/>
                乾淨保麗龍：包水果的網狀塑膠材質。<br/>
                •其他類：照明光源燈管、電池、廢油 ,堆肥廚餘類 ,養豬廚餘類。其中大型傢俱家電需於約定時間回收。

                </Paragraph>
                <SectionTitle>資源回收管道</SectionTitle>
                <Paragraph>
                1.清潔隊<br/>
                民眾將家中資源物於「資源回收日」交給清潔隊回收。<br/>
                2.資收個體戶、回收商<br/>
                查詢資源回收業者聯絡資料，請回收商協助回收。<br/>
                3.販賣場所回收點<br/>
                包括「批發或零售式量販業」、「連鎖式清潔及化妝品零售業」、「超級市場業」及「連鎖便利商店業」等皆設置有資源回收筒供民眾使用。<br/>
                4.公共場合回收設施<br/>
                加油站、車站、機場、高速公路休息站、風景區等場所的回收筒。

                </Paragraph>
                <SectionTitle>資料來源</SectionTitle>
                <Paragraph>
                <a href="https://www.dep-recycle.gov.taipei/News_Content.aspx?n=00F9222A04F318BE&s=B27E5D0C675F6AA3">資源回收入口網-資源回收業務</a><br/>
                <a href="https://recycle.epa.gov.tw/Understanding/KnowLedge">環保署資源回收網</a>
                </Paragraph>

            </RegisterContainer>
        </Container>
    
	);
 };
 
 export default RecyclePage;