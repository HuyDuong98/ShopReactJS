export default function Header(params) {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 hidden-xs">
                <div className="header-top-message pull-left">
                  <span><i className="fa fa-envelope" />demo@example.com</span>
                  <span><i className="fa fa-phone" />0123456789</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="header-top-menu pull-right">
                  <ul className="nav-menu">
                    <li><a href="login.html">LOGIN</a></li>
                    <li><a href="#">LANGLUAGE</a>
                      <div className="ht-menu-down">
                        <ul>
                          <li><a href="#">English</a></li>
                          <li><a href="#">Spansih</a></li>
                          <li><a href="#">Garmany</a></li>
                        </ul>
                      </div>
                    </li>
                    <li><a href="#">CURRENCY</a>
                      <div className="ht-menu-down">
                        <ul>
                          <li><a href="#">EUR</a></li>
                          <li><a href="#">USD</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-sm-2 col-xs-6">
                <div className="header-logo">
                  <a href="index.html">
                    <img src="../img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-10 col-sm-9 hidden-xs">
                <div className="mainmenu text-center">
                  <nav>
                    <ul id="nav">
                      <li><a href="index.html">HOME</a></li>
                      <li><a href="shop.html">SHOP</a></li>
                      <li><a href="shop.html">MEN</a></li>
                      <li><a href="shop.html">WOMEN</a></li>
                      <li><a href="shop.html">COLLECTION</a></li>
                      <li><a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li><a href="404.html">404 Page</a></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="cart.html">Cart Page</a></li>
                          <li><a href="checkout.html">Check Out</a></li>
                          <li><a href="contact-us.html">Contact</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="my-account.html">My Account</a></li>
                          <li><a href="shop.html">Shopping Page</a></li>
                          <li><a href="single-product.html">Single Shop Page</a></li>
                          <li><a href="wishlist.html">Wishlist Page</a></li>
                        </ul>
                      </li>
                      <li><a href="contact-us.html">CONTACT</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-1 col-sm-1 col-xs-6">
                <div className="header-cart pull-right">
                  <ul>
                    <li>
                      <a className="header-cart-link" href="#">
                        <i className="flaticon-bag" />
                        <span>2</span>
                      </a>
                      <div className="cart_down_area">
                        <div className="cart_single">
                          <a href="#">
                            <img src="../img/product/c-1.jpg" alt="" />
                          </a>
                          <h2>
                            <a href="#">Pellentesque hendrerit</a>
                            <a href="#">
                              <span><i className="fa fa-trash" /></span>
                            </a>
                          </h2>
                          <p>1 x $222.00</p>
                        </div>
                        <div className="cart_single">
                          <a href="#">
                            <img src="../img/product/c-2.jpg" alt="" />
                          </a>
                          <h2>
                            <a href="#">Pellentesque hendrerit</a>
                            <a href="#">
                              <span><i className="fa fa-trash" /></span>
                            </a>
                          </h2>
                          <p>1 x $222.00</p>
                        </div>
                        <div className="cart_shoptings">
                          <a href="checkout.html">Checkout</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*Header Area End*/}
      {/* Mobile Menu Start */}
      <div className="mobile-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="mobile-menu">
                <nav id="dropdown">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop.html">SHOP</a></li>
                    <li><a href="shop.html">MEN</a></li>
                    <li><a href="shop.html">WOMEN</a></li>
                    <li><a href="shop.html">COLLECTION</a></li>
                    <li><a href="#">Pages</a>
                      <ul>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="cart.html">Cart Page</a></li>
                        <li><a href="checkout.html">Checkout Page</a></li>
                        <li><a href="contact.html">Contact Page</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="my-account.html">My Account</a></li>
                        <li><a href="shop.html">Shop Page</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                      </ul>
                    </li>
                    <li><a href="contact-us.html">CONTACT</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu End */}
    </>
  )
};
