import Brand from "../../components/Brand";
import Category from "../../containers/Category";
import Compare from "./components/Compare";
import PopularTag from "./components/PopularTag";
import ProductList from "./components/ProductList";
import ShopBy from "./components/ShopBy";
import Product from "./components/Product";
import { useEffect } from "react";

export default function Shop({ products, fetchProducts  }) {

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])

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
                                <Category />
                                <ShopBy />
                                <PopularTag />
                                <Compare />
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
                                                        <select>
                                                            <option value="10" selected="selected">10</option>
                                                            <option value="9">09</option>
                                                            <option value="8">08</option>
                                                            <option value="7">07</option>
                                                            <option value="6">06</option>
                                                        </select>
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
                                            {
                                                products.map((product, i) => (
                                                    <Product key={i} image={product.image} name={product.name} price={product.price} oldPrice={product.oldPrice} status={product.status} statusName={product.statusName} />
                                                ))
                                            }
                                            {/* <Product image='../img/shop/2.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='sale' statusName='sale' />
                                            <Product image='../img/shop/3.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='new' statusName='New' />
                                            <Product image='../img/shop/4.jpg' name='STERLING SILVER' price='360.00' oldPrice={'460.00'} status='offer' statusName='-20%' />
                                            <Product image='../img/shop/5.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='' statusName='' />
                                            <Product image='../img/shop/6.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='sale' statusName='Hot' />
                                            <Product image='../img/shop/7.jpg' name='STERLING SILVER' price='360.00' oldPrice={'450.00'} status='sale' statusName='sale' />
                                            <Product image='../img/shop/8.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='' statusName='' />
                                            <Product image='../img/shop/9.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='' statusName='' />
                                            <Product image='../img/shop/10.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='' statusName='' />
                                            <Product image='../img/shop/11.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='' statusName='' />
                                            <Product image='../img/shop/12.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='' statusName='' />
                                            <Product image='../img/shop/3.jpg' name='STERLING SILVER' price='360.00' oldPrice={null} status='' statusName='' /> */}
                                        </div>
                                    </div>
                                    <div id="menu1" className="tab-pane fade">
                                        <div className="row">
                                            {
                                                products.map((product) => (
                                                    <ProductList image={product.image} name={product.name} price={product.price} description={product.description} />
                                                ))
                                            }
                                            {/* <ProductList image='../img/shop/5.jpg' name='STERLING SILVER' price='360.00' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Morbi ornare lectus quis justo gravida semper. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.' />
                                            <ProductList image='../img/shop/3.jpg' name='STERLING SILVER' price='360.00' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Morbi ornare lectus quis justo gravida semper. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.' />
                                            <ProductList image='../img/shop/7.jpg' name='STERLING SILVER' price='360.00' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Morbi ornare lectus quis justo gravida semper. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.' /> */}
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
                                                        <select>
                                                            <option value={10} selected="selected">10</option>
                                                            <option value={9}>09</option>
                                                            <option value={8}>08</option>
                                                            <option value={7}>07</option>
                                                            <option value={6}>06</option>
                                                        </select>
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
            <Brand />
        </>
    )
};
