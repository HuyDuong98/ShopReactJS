export default function About(params) {
    return (
        <>
            {/* Map Area Start */}
            <div className="map-area">
                <div id="googleMap" style={{ width: '100%', height: '445px' }} />
            </div>
            {/* Map Area End */}
            {/* Address Information Area Start */}
            <div className="address-info-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 hidden-sm">
                            <div className="address-single">
                                <div className="all-adress-info">
                                    <div className="icon">
                                        <span><i className="fa fa-user-plus" /></span>
                                    </div>
                                    <div className="info">
                                        <h3>PHONE</h3>
                                        <p>0123456789</p>
                                        <p>0123456789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="address-single">
                                <div className="all-adress-info">
                                    <div className="icon">
                                        <span><i className="fa fa-map-marker" /></span>
                                    </div>
                                    <div className="info">
                                        <h3>ADDRESS</h3>
                                        <p>Your address goes here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="address-single no-margin">
                                <div className="all-adress-info">
                                    <div className="icon">
                                        <i className="fa fa-envelope" />
                                    </div>
                                    <div className="info">
                                        <h3>E-MAIL</h3>
                                        <p>demo@example.com</p>
                                        <p>example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Address Information Area End */}
            {/* Contact Form Area Start */}
            <div className="contact-form-area">
                <div className="container">
                    <div className="about-title">
                        <h3>LEAVE A MESSAGE</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form action="mail.php" method="POST">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="contact-form-left">
                                            <input type="text" placeholder="Your Name" name="name" id="name" />
                                            <input type="email" placeholder="Your Email" name="email" id="email" />
                                            <input type="text" placeholder="Your phone" name="phone" id="phone" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="contact-form-right">
                                            <div className="input-message">
                                                <textarea name="message" id="message" placeholder="Your Message" defaultValue={""} />
                                                <input className="btn btn-default" type="submit" defaultValue="SEND" name="submit" id="submit" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form Area End */}
        </>
    )
};
