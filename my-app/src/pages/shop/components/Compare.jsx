export default function Compare(params) {
    return (
        <>
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
        </>
    )
};
