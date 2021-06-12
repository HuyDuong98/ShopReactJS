export default function Footer(params) {
    return (
        <>{/* Footer Area Start */}
            <div className="footer-top-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-left">
                                <a href="index.html">
                                    <img src="../img/logo.png" alt="" />
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                <div className="social-icon">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="flaticon-social" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="flaticon-social-1" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="flaticon-symbols" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="flaticon-camera" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="flaticon-social-2" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget widget-contact-us">
                                <h2 className="footer-w-title">CONTACT US</h2>
                                <ul className="footer-list">
                                    <li>
                                        <p><span>Address: </span> Your address goes here</p>
                                    </li>
                                    <li>
                                        <p><span>Phone: </span> 0123456789</p>
                                    </li>
                                    <li>
                                        <p><span>Email: </span> demo@example.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="footer-widget">
                                <h2 className="footer-w-title">CUSTOMER SERVICE</h2>
                                <ul className="footer-list">
                                    <li><a href="#">Shipping policy</a></li>
                                    <li><a href="#">Return policy</a></li>
                                    <li><a href="#">Terms and conditions</a></li>
                                    <li><a href="#">Your account</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="footer-widget">
                                <h2 className="footer-w-title">MY ACCOUNT</h2>
                                <ul className="footer-list">
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">My Cart</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                    <li><a href="#">Checkout</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="footer-widget">
                                <h2 className="footer-w-title">INFORMATION</h2>
                                <ul className="footer-list">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Delivery Information</a></li>
                                    <li><a href="#">Privacy &amp; Policy</a></li>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Manufactures</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Area End */}
            {/* Footer Bottom Area */}
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="copyright pull-left">
                                <p>© 2021 <b>Taj</b> Made with <i className="fa fa-heart text-danger" /> by <a href="https://hasthemes.com/"><b>HasThemes</b></a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="paypal-img pull-right">
                                <img src="../img/paypal.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom End */}
            {/*Quickview Product Start */}
            <div id="quickview-wrapper">
                {/* Modal */}
                <div className="modal fade" id="productModal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-product">
                                    <div className="product-images">
                                        <div className="main-image images">
                                            <img alt="" src="../img/new-product/quick-view.jpg" />
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h1>Frame Princes Cut Diamond</h1>
                                        <div className="price-box">
                                            <p className="price"><span className="special-price"><span className="amount">$280.00</span></span>
                                            </p>
                                        </div>
                                        <a href="product-details.html" className="see-all">See all features</a>
                                        <div className="quick-add-to-cart">
                                            <form method="post" className="cart">
                                                <div className="numbers-row">
                                                    <input type="number" id="french-hens" defaultValue={3} />
                                                </div>
                                                <button className="single_add_to_cart_button" type="submit">Add to cart</button>
                                            </form>
                                        </div>
                                        <div className="quick-desc">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                                            nulla.
                      </div>
                                        <div className="social-sharing">
                                            <div className="widget widget_socialsharing_widget">
                                                <h3 className="widget-title-modal">Share this product</h3>
                                                <ul className="social-icons">
                                                    <li><a target="_blank" title="Facebook" href="#" className="facebook social-icon"><i className="fa fa-facebook" /></a></li>
                                                    <li><a target="_blank" title="Twitter" href="#" className="twitter social-icon"><i className="fa fa-twitter" /></a></li>
                                                    <li><a target="_blank" title="Pinterest" href="#" className="pinterest social-icon"><i className="fa fa-pinterest" /></a></li>
                                                    <li><a target="_blank" title="Google +" href="#" className="gplus social-icon"><i className="fa fa-google-plus" /></a></li>
                                                    <li><a target="_blank" title="LinkedIn" href="#" className="linkedin social-icon"><i className="fa fa-linkedin" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* .product-info */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End of Quickview Product*/}

        </>
    )
};
