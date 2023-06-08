import useHeader from "../../store/useHeader"

function Header({ index }) {
	const headerContext = useHeader()
	const [headerData, ] = headerContext
	return (
					<header key={headerData[index].id} className="masthead" style={{backgroundImage: `url(${headerData[index].backgroundImg})`}}>
						<div className="container position-relative px-4 px-lg-5">
							<div className="row gx-4 gx-lg-5 justify-content-center">
								<div className="col-md-10 col-lg-8 col-xl-7">
									<div className={`${headerData[index].name}-heading`}>
										<h1>{headerData[index].heading}</h1>
										<span className="subheading">{headerData[index].subheading}</span>
										<span className="meta">
											{headerData[index].meta}
										</span>
									</div>
								</div>
							</div>
						</div>
					</header>
	)
}

export default Header