import styled from "@emotion/styled";

const PageContainer = styled.div`
	width: 80%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
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
		<PageContainer>
			<SectionTitle>資源回收目的</SectionTitle>
			<br />
			<Paragraph>
				資源回收能預防浪費有潛在利用價值的資源、削減原料消耗，由此減少：能量消耗、空氣污染和水污染。收集本來要廢棄的材料，分解再製成新產品，或者是收集用過的產品，清潔、處理之後再出售。相對於垃圾遺棄，回收可以節省資源、降低溫室氣體排放。
			</Paragraph>
			<br />
			<br />
			<SectionTitle>環保6R</SectionTitle>
			<br />
			<Paragraph>
				6R為垃圾減量之六項原則，分別為
				<br />
				<br />
				Reduce：減少丟棄之垃圾量
				<br />
				<br />
				Reuse：重複使用容器或產品
				<br />
				<br />
				Repair：重視維修保養，延長物品使用壽命
				<br />
				<br />
				Refuse：拒用無環保觀念產品 <br />
				<br />
				Recycle：回收使用再生產品
				<br />
				<br />
				Recovery
				:（再生）指改變原料形態或其他物質結合，使再生資源產生功用之行為。例如沼氣發電、輪胎磨粉作為燃料，廢油回收做生質能源、廚餘回收做堆肥等。
			</Paragraph>
			<br />
			<br />
			<SectionTitle>回收項目</SectionTitle>
			<br />
			<Paragraph>
				回收項目分別為平面類、立體類、其他大型家具家電類及廚餘，根據項目不同處理方式亦有不同。
				<br />
				<br />
				•平面類：各種乾淨舊衣物 ,廢紙類 ,塑膠袋類 ,舊書。
				<br />
				<br />
				•立體類：分為一般類與保麗龍。
				<br />
				一般類資源物：各類瓶罐、紙容器、小家電、電腦主機、壓克力等等。
				<br />
				乾淨保麗龍：包水果的網狀塑膠材質。
				<br />
				<br />
				•其他類：照明光源燈管、電池、廢油 ,堆肥廚餘類
				,養豬廚餘類。其中大型傢俱家電需於約定時間回收。
			</Paragraph>
			<br />
			<br />
			<SectionTitle>資源回收管道</SectionTitle>
			<br />
			<Paragraph>
				1.清潔隊
				<br />
				民眾將家中資源物於「資源回收日」交給清潔隊回收。
				<br />
				<br />
				2.資收個體戶、回收商
				<br />
				查詢資源回收業者聯絡資料，請回收商協助回收。
				<br />
				<br />
				3.販賣場所回收點
				<br />
				包括「批發或零售式量販業」、「連鎖式清潔及化妝品零售業」、「超級市場業」及「連鎖便利商店業」等皆設置有資源回收筒供民眾使用。
				<br />
				<br />
				4.公共場合回收設施
				<br />
				加油站、車站、機場、高速公路休息站、風景區等場所的回收筒。
			</Paragraph>
			<br />
			<br />
			<SectionTitle>參考資料</SectionTitle>
			<br />
			<Paragraph>
				<a href="https://www.dep-recycle.gov.taipei/News_Content.aspx?n=00F9222A04F318BE&s=B27E5D0C675F6AA3">
					資源回收入口網-資源回收業務
				</a>
				<br />
				<a href="https://recycle.epa.gov.tw/Understanding/KnowLedge">
					環保署資源回收網
				</a>
			</Paragraph>
		</PageContainer>
	);
};

export default RecyclePage;
