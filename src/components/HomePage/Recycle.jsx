const Recycle = (prop) =>{
    return(<div className="Chiyai">
		<div className="frame77-text023">
			<div>{prop.eventName}</div>
		</div>
		<div className="frame77-text025">
			{prop.location}
		</div>
		<div className="frame77-frame26">
			<div className="frame77-text027">Join now!</div>
		</div>
		<div className="frame77-text029">50+</div>
        {/* TODO:lifecycle */}
		<div className="frame77-time">
			<div className="frame77-text031">{prop.time}</div>
		</div>
		<div className="frame77-date">
			<div className="frame77-text033">{prop.date}</div>
		</div>
		<img
			src="/assets/userIcon.svg"
			alt="user1819"
			className="frame77-user"
		/>
		<img
			src="/assets/maptag.svg"
			alt="maptag1820"
			className="frame77-maptag"
		/>
		<img
			src={prop.src}
			alt="Screenshot20230412at035511821"
			className="frame77-screenshot20230412at03551"
		/>
	</div> 
    )
}
export default Recycle;