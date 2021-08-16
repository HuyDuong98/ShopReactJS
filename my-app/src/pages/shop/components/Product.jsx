
export default function Product({id, image, name, price, oldPrice, status, statusName}) {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="single-product">
                <a href="single-product.html">
                    <img src={image} alt="" />
                </a>
                <div className={`single-product-overlay ${status}`}>
                    <h3>{statusName}</h3>
                </div>
                <div className="single-product-content">
                    <div className="left-content pull-left">
                        <a href="#">
                            <h2>{name}</h2>
                        </a>
                        <span className="new-price">${price}</span>
                        {
                            oldPrice? <span className="old-price">${oldPrice}</span> : <></>
                        }
                    </div>
                    <div className="right-content pull-right">
                        <a href="#"><i className="flaticon-bag" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
};
