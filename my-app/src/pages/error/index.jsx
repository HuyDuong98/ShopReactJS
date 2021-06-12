export default function Error(params) {
    return (
        <>
            {/* Breadcrumbs Area Start */}
            <div className="breadcrumbs-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcrumb-single">
                                <ul className="breadcrumbs">
                                    <li><a href="index.html" title="Return to Home">
                                        Home
                      </a></li>
                                    <li>
                                        <span>&gt;</span>
                                    </li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumbs Area End */}
            {/* 404 Error Page Start */}
            <div className="error-text-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="error-text text-center">
                                <img alt="" src="../img/404.png" />
                                <h1>OPPS! PAGE NOT FOUND</h1>
                                <a href="index.html">BACK TO HOME PAGE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 404 Error Page End */}
        </>
    )
};
