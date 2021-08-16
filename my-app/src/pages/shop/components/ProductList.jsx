export default function ProductList({image, name, price, description}) {
    return (
        <>
            <div className="col-md-12">
                <div className="shop-list-single">
                    <div className="shop-list-left">
                        <a href="#"><img src={image} alt={name} /></a>
                    </div>
                    <div className="shop-list-right">
                        <div className="left-content">
                            <a href="#">
                                <h2>{name}</h2>
                            </a>
                            <span className="new-price">${price}</span>
                        </div>
                        <div className="list-pro-rating">
                            <i className="fa fa-star icolor" />
                            <i className="fa fa-star icolor" />
                            <i className="fa fa-star icolor" />
                            <i className="fa fa-star icolor" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="product-desc">
                            <p>{description}</p>
                        </div>
                        <a className="btn-default" href="#">SHOP NOW</a>
                    </div>
                </div>
            </div>
        </>
    )
};
