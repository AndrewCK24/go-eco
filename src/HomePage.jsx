import styled from "@emotion/styled";
import "../pageCSS/HomePage.css";
import Recycle from "./components/HomePage/Recycle";
import CleanUp from "./components/HomePage/CleanUp";

const HomePage = () => {
	return (
		<div>
			<div className="HomePage">
				<div className="HomePageContainer">
					<div className="MainBlock">
						<div className="LeftBlock">
							<div className="LeftBlockText">
										Now’s the time
										<br />
										to do something
										<br />
										for our planet
								<div className="frame77-frame6">
									<div className="frame77-frame4">
										<div className="frame77-text013">
											500+
										</div>
										<div className="frame77-text015">
											Beach cleanup
										</div>
									</div>

									<div className="frame77-frame4">
										<div className="frame77-text013">
											<div>1000+</div>
										</div>
										<div className="frame77-text015">
											<div>Eco activities</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<img src="/assets/mainBlockBackGround.png" />
						<img
							src="/assets/potPlant.png"
							className="potPlant"
						/>
						<div className="SearchBlock">
							<div className="SearchBlockText">
								What are you looking for?
							</div>
							<img
								src="/assets/search.svg"
								className="search"
							/>
						</div>
					</div>
					<Recycle eventName="Plant conservation"
						location="Chiayi county"
						time="11:00 AM"
						date="04.16.2023"
						src="/assets/recyclePicture1.png"
					/>
					<Recycle eventName="Recycle reusing"
						location="Taipei City"
						time="10:00 AM"
						date=">04.22.2023"
						src="/assets/recyclePicture2.png"
					/>
					<Recycle eventName="Kitchen waste reuse"
						location="Yilan county"
						time="02:00 PM"
						date="05.06.2023"
						src="/assets/recyclePicture3.png"
					/>
					<Recycle eventName="Garbage reuse way"
						location="Kaohsiung City"
						time="03:00 PM"
						date="05.11.2023"
						src="/assets/recyclePicture4.png"
					/>
					<CleanUp eventName="Mountain cleaning"
						location="Yilan county"
						time="08:00 AM"
						date="04.15.2023"
						src="/assets/cleanUpPicture1.png"
					/>
					<CleanUp eventName="Beach cleanup"
						location="Tainan City"
						time="07:00 AM"
						date="05.06.2023"
						src="/assets/cleanUpPicture2.png"
					/>
					<CleanUp eventName="Ｗetlands cleanup"
						location="Taichung City"
						time="05:00 PM"
						date="04.25.2023"
						src="/assets/cleanUpPicture3.png"
					/>
					<CleanUp eventName="Beach cleanup"
						location="New Taipei City"
						time="12:00 PM"
						date="04.17.2023"
						src="/assets/cleanUpPicture4.png"
					/>
					<div className="frame77-text119">Let’s make our planet better!</div>
					<div className="frame77-text121">Just go eco NOW!</div>
					<div className="frame77-text123">What’s volunteers’ feesback?</div>
					<div className="frame77-frame49">
						<div className="frame77-text125">
							Beach cleanups are a great way to protect the environment and
							prevent harm to marine life by removing trash and debris from
							beaches. Participating in a beach cleanup is a rewarding
							experience that allows you to make a positive impact on the
							environment, connect with my community.
						</div>
						<div className="frame77-group9">
							<img
								src="/assets/vector1975.svg"
								alt="Vector1975"
								className="frame77-vector"
							/>
							<img
								src="/assets/unsplash5aguycwpjwremovebgpreview1976-z7m-300h.png"
								alt="unsplash5aGUyCWPJwremovebgpreview1976"
								className="frame77-unsplash5a--uy-cw-jwremovebgpreview"
							/>
						</div>
						<div className="frame77-frame46">
							<div className="frame77-text127">John Kenny</div>
							<div className="frame77-text129">The HR in Google</div>
						</div>
					</div>
					<div className="frame77-frame50">
						<div className="frame77-text131">
							Being eco-friendly means adopting behaviors that are sustainable
							and have a minimal impact on the environment. This includes
							reducing waste, conserving resources, and using environmentally
							friendly products and practices.
						</div>
						<div className="frame77-frame461">
							<div className="frame77-text133">Yara van dovan</div>
							<div className="frame77-text135">Doctor</div>
						</div>
						<div className="frame77-group10">
							<img
								src="/assets/vector1975.svg"
								alt="Vector1986"
								className="frame77-vector1"
							/>
							<img
								src="/assets/unsplasho3ymvt7wf9uremovebgpreview1987-lpr4-200w.png"
								alt="unsplashO3ymvT7Wf9Uremovebgpreview1987"
								className="frame77-unsplash-o3ymv-t-wf-uremovebgpreview"
							/>
						</div>
					</div>
					<div className="frame77-frame24">
						<div className="frame77-frame17">
							<div className="frame77-text137">About us</div>
							<div className="frame77-text139">Better late then never to protect our planet.</div>
						</div>
						<div className="frame77-frame22">
							<div className="frame77-frame19">
								<div className="frame77-frame18">
									<div className="frame77-group1">
										<img
											src="/assets/ellipse.png"
											alt="Ellipse11996"
											className="frame77-ellipse1"
										/>
										<img
											src="/assets/vector1997-4en6.svg"
											alt="Vector1997"
											className="frame77-vector2"
										/>
									</div>
									<div className="frame77-text141">Better environment</div>
								</div>
								<div className="frame77-text143">
										We just want to make our environment better though our
										website.
								</div>
							</div>
							<div className="frame77-frame20">
								<div className="frame77-frame181">
									<img
										src="/assets/ellipse.png"
										alt="Ellipse11100"
										className="frame77-ellipse11"
									/>
									<img
										src="/assets/vector1100-rw3.svg"
										alt="Vector1100"
										className="frame77-vector3"
									/>
									<div className="frame77-text145">Package eco activities</div>
								</div>
								<div className="frame77-text147">
									No longer difficult to find out eco activities, we already
									find it and pack it up for you.
								</div>
							</div>
							<div className="frame77-frame21">
								<div className="frame77-frame182">
									<img
										src="/assets/ellipse.png"
										alt="Ellipse11101"
										className="frame77-ellipse12"
									/>
									<img
										src="/assets/telephoneoutbound1101-8rf8.svg"
										alt="TelephoneOutbound1101"
										className="frame77-telephone-outbound"
									/>
									<div className="frame77-text149">Always support</div>
								</div>
								<div className="frame77-text151">
									Always provide support for any questions,
									<br />
									join eco activities is no longer confused.
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="frame77-text187">View All</div>
				<div className="frame77-text189">View All</div>
			</div>
		</div>
	);
};

export default HomePage;
