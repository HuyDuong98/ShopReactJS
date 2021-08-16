import CategoryItem from "./CategoryItem";

export default function ShopBy(params) {
    return (
        <>
            <aside className="widget widget-shop-by">
                <h2 className="sidebar-title">SHOP BY</h2>
                <h3 className="sidebar-sub-title">Manufacture</h3>
                <ul className="sidebar-menu">
                    <CategoryItem name="Rings" count="20" />
                    <CategoryItem name="Necklaces" count="26" />
                    <CategoryItem name="Bracelets" count="15" />
                    <CategoryItem name="Earrings" count="22" />
                    <CategoryItem name="Churies" count="26" />
                    <CategoryItem name="Jewelry Sets" count="36" />
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
                    <CategoryItem name="White" count="21" />
                    <CategoryItem name="Black" count="5" />
                    <CategoryItem name="Blue" count="10" />
                    <CategoryItem name="Red" count="14" />
                    <CategoryItem name="Green" count="20" />
                    <CategoryItem name="Gray" count="6" />
                </ul>
            </aside>
        </>
    )
};
