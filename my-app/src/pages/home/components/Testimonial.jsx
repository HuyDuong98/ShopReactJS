import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonial(params) {
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
            {/*Testimonial Area Start*/}
            < div className="testimonial-area section-padding" >
                <div className="container">
                    <div className="row">
                        <Slider {...options} className="testimonial-list indicator-style-3">
                            <div className="single-testimonial">
                                <div className="col-md-offset-1 col-md-2 col-sm-2">
                                    <div className="support-img">
                                        <img src="../img/testimonial/1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                    <div className="testimonial-text">
                                        <h2>What our client says</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book.</p>
                                        <a href="#">ZENIFAR DUE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-testimonial">
                                <div className="col-md-offset-1 col-md-2 col-sm-2">
                                    <div className="support-img">
                                        <img src="../img/testimonial/2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                    <div className="testimonial-text">
                                        <h2>What our client says</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book.</p>
                                        <a href="#">ZENIFAR DUE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-testimonial">
                                <div className="col-md-offset-1 col-md-2 col-sm-2">
                                    <div className="support-img">
                                        <img src="../img/testimonial/3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                    <div className="testimonial-text">
                                        <h2>What our client says</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book.</p>
                                        <a href="#">ZENIFAR DUE</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/*Testimonial Area End*/}
        </>
    )
};
