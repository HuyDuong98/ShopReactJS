import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Brand(params) {
    const options = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
    }

    return (
        <>
            {/* Brand Area Start */}
            <div className="brand-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>OUR BRANDS</h2>
                        </div>
                        <Slider {...options} className="brand-list indicator-style2">
                            <div className="col-md-12">
                                <div className="single-brand">
                                    <a href="#">
                                        <img src="../img/brand/1.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="single-brand">
                                    <a href="#">
                                        <img src="../img/brand/2.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="single-brand">
                                    <a href="#">
                                        <img src="../img/brand/3.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="single-brand">
                                    <a href="#">
                                        <img src="../img/brand/4.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="single-brand">
                                    <a href="#">
                                        <img src="../img/brand/5.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="single-brand">
                                    <a href="#">
                                        <img src="../img/brand/1.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="single-brand">
                                    <a href="#">
                                        <img src="../img/brand/2.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="single-brand">
                                    <a href="#">
                                        <img src="../img/brand/3.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/* Brand Area End */}
        </>
    )
};
