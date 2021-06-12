import Brand from "../../components/Brand";

export default function Shop(params) {
    return (
        <>
            {/* Breadcrumbs Area Start */}
            <div className="breadcrumbs-area2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>SHOP LEFT SIDEBAR</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumbs Area End */}
            {/* Shop Page Area Start */}
            <div className="shop-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="shop-widget">
                                <aside className="widget widget-categories">
                                    <h2 className="sidebar-title">CATEGORY</h2>
                                    <ul className="sidebar-menu">
                                        <li>
                                            <a href="#">
                                                Rings
                          <span>(10)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Necklaces
                          <span>(15)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Bracelets
                          <span>(5)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Earrings
                          <span>(25)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Churies
                          <span>(14)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Jewelry Sets
                          <span>(20)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside className="widget widget-shop-by">
                                    <h2 className="sidebar-title">SHOP BY</h2>
                                    <h3 className="sidebar-sub-title">Manufacture</h3>
                                    <ul className="sidebar-menu">
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Rings</span>
                                                <span>(20)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Necklaces</span>
                                                <span>(26)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Bracelets</span>
                                                <span>(15)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Earrings</span>
                                                <span>(22)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Churies</span>
                                                <span>(26)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Jewelry Sets</span>
                                                <span>(36)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside className="widget widget-shop-by">
                                    <h3 className="sidebar-sub-title">Price</h3>
                                    <div className="info-widget">
                                        <div className="price_filter">
                                            <div id="slider-range" />
                                            <div className="price_slider_amount">
                                                <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                                <input type="submit" defaultValue="SEARCH" />
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                                <aside className="widget widget-shop-by">
                                    <h3 className="sidebar-sub-title">Color</h3>
                                    <ul className="sidebar-menu">
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">White</span>
                                                <span>(21)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Black</span>
                                                <span>(5)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Blue</span>
                                                <span>(10)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Red</span>
                                                <span>(14)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Green</span>
                                                <span>(20)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="widget-hover">Gray</span>
                                                <span>(6)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside className="widget widget-populer-tag">
                                    <h2 className="sidebar-title">POPULAR TAG</h2>
                                    <ul className="tag-list">
                                        <li><a href="#">Fashion</a></li>
                                        <li><a href="#">Women’s</a></li>
                                        <li><a href="#">Kids</a></li>
                                        <li><a href="#">Lookbook</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Dress</a></li>
                                        <li><a href="#">Sale Off</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">men’s</a></li>
                                        <li><a href="#">Carry bag</a></li>
                                    </ul>
                                </aside>
                                <aside className="widget widget-compare">
                                    <h2 className="sidebar-title">COMPARE</h2>
                                    <ul className="side-bar-compare">
                                        <li>
                                            Product Name #01
                        <a href="#"><span><i className="fa fa-times" /></span></a>
                                        </li>
                                        <li>
                                            Product Name #02
                        <a href="#"><i className="fa fa-times" /></a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside className="widget widget-image">
                                    <a href="#">
                                        <img src="../img/shop/side-bar.jpg" alt="" />
                                    </a>
                                    <div className="widget-content">
                                        <h2>Friday Sale <br />Extra <br />30% Off</h2>
                                        <a href="#">Shop Now <i className="fa fa-angle-right" /> </a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                            <div className="shop-right-area">
                                <div className="shop-tab-list">
                                    <div className="shop-left-tab">
                                        <div className="shop-tab-pill pull-left">
                                            <ul>
                                                <li className="active" id="left"><a data-toggle="pill" href="#home"><i className="fa fa-th" /><span /></a></li>
                                                <li><a data-toggle="pill" href="#menu1"><i className="fa fa-th-list" /><span /></a></li>
                                            </ul>
                                        </div>
                                        <div className="shop-tab-pill pull-right">
                                            <ul>
                                                <li className="product-size-deatils">
                                                    <div className="show-label">
                                                        <label>Sort by : </label>
                                                        <select>
                                                            <option value="position" selected="selected">Position</option>
                                                            <option value="Name">Name</option>
                                                            <option value="Price">Price</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li className="product-size-deatils">
                                                    <div className="show-label">
                                                        <label>Show : </label>
                                                        {/* <select>
                                                            <option value={10} selected="selected">10</option>
                                                            <option value={09}>09</option>
                                                            <option value={08}>08</option>
                                                            <option value={07}>07</option>
                                                            <option value={06}>06</option>
                                                        </select> */}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="shop-tab-pill pull-right">
                                        <div className="shop-pagination">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-caret-left" /></a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div className="row tab-pane fade in active" id="home">
                                        <div className="shop-single-product-area">
                                            <div className="col-md-4 col-sm-6">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/5.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-overlay sale">
                                                        <h3>sale</h3>
                                                    </div>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/2.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-overlay new">
                                                        <h3>New</h3>
                                                    </div>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/3.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-overlay offer">
                                                        <h3>-20%</h3>
                                                    </div>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                            <span className="old-price">$460.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/4.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/5.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-overlay sale">
                                                        <h3>Hot</h3>
                                                    </div>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/6.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                            <span className="old-price">$450.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 hidden-xs">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/7.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 hidden-xs">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/8.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 hidden-sm hidden-xs">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/9.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                            <span className="old-price">$540.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 hidden-sm hidden-xs">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/10.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 hidden-sm hidden-xs">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/11.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 hidden-sm hidden-xs">
                                                <div className="single-product">
                                                    <a href="single-product.html">
                                                        <img src="../img/shop/12.jpg" alt="" />
                                                    </a>
                                                    <div className="single-product-content">
                                                        <div className="left-content pull-left">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                            <span className="old-price">$450.00</span>
                                                        </div>
                                                        <div className="right-content pull-right">
                                                            <a href="#"><i className="flaticon-bag" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu1" className="tab-pane fade">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="shop-list-single">
                                                    <div className="shop-list-left">
                                                        <a href="#"><img src="../img/shop/5.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="shop-list-right">
                                                        <div className="left-content">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="list-pro-rating">
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <div className="product-desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
                                  mi, vulputate adipiscing cursus eu, suscipit id nulla.Morbi ornare lectus quis justo gravida semper.</p>
                                                            <p>Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                                        </div>
                                                        <a className="btn-default" href="#">SHOP NOW</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="shop-list-single">
                                                    <div className="shop-list-left">
                                                        <a href="#"><img src="../img/shop/2.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="shop-list-right">
                                                        <div className="left-content">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="list-pro-rating">
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                        </div>
                                                        <div className="product-desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
                                  mi, vulputate adipiscing cursus eu, suscipit id nulla.Morbi ornare lectus quis justo gravida semper.</p>
                                                            <p>Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                                        </div>
                                                        <a className="btn-default" href="#">SHOP NOW</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="shop-list-single">
                                                    <div className="shop-list-left">
                                                        <a href="#"><img src="../img/shop/3.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="shop-list-right">
                                                        <div className="left-content">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$360.00</span>
                                                        </div>
                                                        <div className="list-pro-rating">
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <div className="product-desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
                                  mi, vulputate adipiscing cursus eu, suscipit id nulla.Morbi ornare lectus quis justo gravida semper.</p>
                                                            <p>Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                                        </div>
                                                        <a className="btn-default" href="#">SHOP NOW</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="shop-list-single">
                                                    <div className="shop-list-left">
                                                        <a href="#"><img src="../img/shop/4.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="shop-list-right">
                                                        <div className="left-content">
                                                            <a href="#">
                                                                <h2>STERLING SILVER</h2>
                                                            </a>
                                                            <span className="new-price">$250.00</span>
                                                        </div>
                                                        <div className="list-pro-rating">
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star icolor" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <div className="product-desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
                                  mi, vulputate adipiscing cursus eu, suscipit id nulla.Morbi ornare lectus quis justo gravida semper.</p>
                                                            <p>Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                                        </div>
                                                        <a className="btn-default" href="#">SHOP NOW</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop-tab-list no-margin">
                                    <div className="shop-left-tab">
                                        <div className="shop-tab-pill pull-left">
                                            <ul>
                                                <li className="active first-margin"><a data-toggle="pill" href="#home"><i className="fa fa-th" /><span /></a></li>
                                                <li><a data-toggle="pill" href="#menu1"><i className="fa fa-th-list" /><span /></a></li>
                                            </ul>
                                        </div>
                                        <div className="shop-tab-pill pull-right">
                                            <ul>
                                                <li className="product-size-deatils">
                                                    <div className="show-label">
                                                        <label>Sort by : </label>
                                                        <select>
                                                            <option value="position" selected="selected">Position</option>
                                                            <option value="Name">Name</option>
                                                            <option value="Price">Price</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li className="product-size-deatils">
                                                    <div className="show-label">
                                                        <label>Show : </label>
                                                        {/* <select>
                                                            <option value={10} selected="selected">10</option>
                                                            <option value={09}>09</option>
                                                            <option value={08}>08</option>
                                                            <option value={07}>07</option>
                                                            <option value={06}>06</option>
                                                        </select> */}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="shop-tab-pill pull-right">
                                        <div className="shop-pagination">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-caret-left" /></a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shop Page Area End */}
            <Brand/>
        </>
    )
};
