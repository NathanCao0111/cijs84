function Header({ img, heading, subheading, meta }) {
	return (
		<header className="masthead" style={{backgroundImage: img}}>
        <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="site-heading">
                <h1>{heading}</h1>
                <span className="subheading">{subheading}</span>
                <span className="meta">{meta}</span>
                </div>
            </div>
            </div>
        </div>
        </header>
	)
}

export default Header