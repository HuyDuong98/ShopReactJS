import React, { useEffect } from "react";

let $ = window.$
export default function Banner(params) {
    useEffect(()=>{
        $('#ensign-nivoslider-3').nivoSlider({
            effect: 'random',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 500,
            pauseTime: 5000,
            startSlide: 0,
            directionNav: true,
            controlNavThumbs: false,
            pauseOnHover: true,
            manualAdvance: false
        });
    }, [])
    return (
        <>
            {/* slider Area Start */}
            <div className="slider-area">
                <div className="bend niceties preview-1">
                    <div id="ensign-nivoslider-3" className="slides">
                        <img src="../img/slider/s-1-1.jpg" alt="" title="#slider-direction-1" />
                        <img src="../img/slider/s-1-2.jpg" alt="" title="#slider-direction-2" />
                    </div>
                    {/* direction 1 */}
                    <div id="slider-direction-1" className="t-cn slider-direction">
                        {/* layer 1 */}
                        <div className="layer-1-1">
                            <h3 className="title-1"><strong>SPANKING</strong><br />COLLECTION</h3>
                        </div>
                        {/* layer 2 */}
                        <div className="layer-1-2">
                            <a href="#" className="title-2">SHOP NOW</a>
                        </div>
                    </div>
                    {/* direction 2 */}
                    <div id="slider-direction-2" className="slider-direction">
                        {/* layer 1 */}
                        <div className="layer-1-1">
                            <h3 className="title-1"><strong>SPANKING</strong><br />COLLECTION</h3>
                        </div>
                        {/* layer 2 */}
                        <div className="layer-1-2">
                            <a href="#" className="title-2">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider Area End*/}
        </>
    )
};
