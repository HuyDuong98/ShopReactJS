import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewProduct(params) {
  const options = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
  }


  return (
    <>
      {/*New Product Area Start*/}
      <div className="new-product-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="new-product-top">
                <div className="col-50 padding-right">
                  <div className="single-top-product">
                    <img src="../img/new-product/1.jpg" alt="" />
                    <div className="overlay-content">
                      <a href="shop.html">
                        <h3>Freederica <br /> Sterling Silver</h3>
                      </a>
                      <a href="shop.html" className="btn-product">Shop Now</a>
                    </div>
                  </div>
                  <div className="single-top-product">
                    <img src="../img/new-product/3.jpg" alt="" />
                    <div className="overlay-content">
                      <a href="shop.html">
                        <h3>Carles Krypen <br /> Sterling Silver</h3>
                      </a>
                      <a href="shop.html" className="btn-product">Shop Now</a>
                      <button className="price-offer">25% <br /> OFF</button>
                    </div>
                  </div>
                </div>
                <div className="col-50 padding-left">
                  <div className="single-top-product">
                    <img src="../img/new-product/2.jpg" alt="" />
                    <div className="overlay-content">
                      <a href="shop.html">
                        <h3>Logos <br /> Sterling Silver</h3>
                      </a>
                      <a href="shop.html" className="btn-product">Shop Now</a>
                    </div>
                  </div>
                  <div className="single-top-product">
                    <img src="../img/new-product/4.jpg" alt="" />
                    <div className="overlay-content">
                      <a href="shop.html">
                        <h3>Diamond<br /> Vintage Gold</h3>
                      </a>
                      <a href="shop.html" className="btn-product">Shop Now</a>
                      <button className="price-offer">25% <br /> OFF</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="new-trend section-padding">
            <div className="row">
              <div className="section-title">
                <h2>New Trend</h2>
              </div>
              <Slider {...options} className="new-trend-list indicator-style">
                <div className="col-md-4">
                  <div className="single-new-trend">
                    <a href="shop.html"><img src="../img/new-product/5.jpg" alt="" /></a>
                    <div className="overlay-content">
                      <a href="shop.html">
                        <h2>$280</h2>
                      </a>
                      <a href="shop.html" className="btn-small">Now</a>
                      <div className="product-action">
                        <ul>
                          <li>
                            <a href="#"><i className="flaticon-bag" /></a>
                          </li>
                          <li>
                            <a href="#" title="Quick view" data-toggle="modal" data-target="#productModal"><i className="flaticon-view" /></a>
                          </li>
                        </ul>
                      </div>
                      <a href="shop.html">
                        <h4>Frame Princes Cut Diamond</h4>
                      </a>
                      <div className="pro-rating">
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-new-trend">
                    <a href="shop.html"><img src="../img/new-product/6.jpg" alt="" /></a>
                    <div className="overlay-content">
                      <a href="shop.html">
                        <h2>$280</h2>
                      </a>
                      <a href="shop.html" className="btn-small">Now</a>
                      <div className="product-action">
                        <ul>
                          <li>
                            <a href="#"><i className="flaticon-bag" /></a>
                          </li>
                          <li>
                            <a href="#" title="Quick view" data-toggle="modal" data-target="#productModal"><i className="flaticon-view" /></a>
                          </li>
                        </ul>
                      </div>
                      <a href="shop.html">
                        <h4>Frame Princes Cut Diamond</h4>
                      </a>
                      <div className="pro-rating">
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-new-trend">
                    <a href><img src="../img/new-product/7.jpg" alt="" /></a>
                    <div className="overlay-content">
                      <a href="shop.html">
                        <h2>$280</h2>
                      </a>
                      <a href="shop.html" className="btn-small">Now</a>
                      <div className="product-action">
                        <ul>
                          <li>
                            <a href="#"><i className="flaticon-bag" /></a>
                          </li>
                          <li>
                            <a href="#" title="Quick view" data-toggle="modal" data-target="#productModal"><i className="flaticon-view" /></a>
                          </li>
                        </ul>
                      </div>
                      <a href="shop.html">
                        <h4>Frame Princes Cut Diamond</h4>
                      </a>
                      <div className="pro-rating">
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-new-trend">
                    <a href="shop.html"><img src="../img/new-product/5.jpg" alt="" /></a>
                    <div className="overlay-content">
                      <a href="shop.html">
                        <h2>$280</h2>
                      </a>
                      <a href="shop.html" className="btn-small">Now</a>
                      <div className="product-action">
                        <ul>
                          <li>
                            <a href="#"><i className="flaticon-bag" /></a>
                          </li>
                          <li>
                            <a href="#" title="Quick view" data-toggle="modal" data-target="#productModal"><i className="flaticon-view" /></a>
                          </li>
                        </ul>
                      </div>
                      <a href="shop.html">
                        <h4>Frame Princes Cut Diamond</h4>
                      </a>
                      <div className="pro-rating">
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-new-trend">
                    <a href="shop.html"><img src="../img/new-product/6.jpg" alt="" /></a>
                    <div className="overlay-content">
                      <a href="shop.html">
                        <h2>$280</h2>
                      </a>
                      <a href="shop.html" className="btn-small">Now</a>
                      <div className="product-action">
                        <ul>
                          <li>
                            <a href="#"><i className="flaticon-bag" /></a>
                          </li>
                          <li>
                            <a href="#" title="Quick view" data-toggle="modal" data-target="#productModal"><i className="flaticon-view" /></a>
                          </li>
                        </ul>
                      </div>
                      <a href="shop.html">
                        <h4>Frame Princes Cut Diamond</h4>
                      </a>
                      <div className="pro-rating">
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* New Product Area End */}
    </>
  )
};
