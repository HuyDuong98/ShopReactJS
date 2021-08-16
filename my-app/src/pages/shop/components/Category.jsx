import { useEffect } from "react"
import CategoryItem from "./CategoryItem"

export default function Category({category,fetchCategory}) {

    useEffect(()=>{
        fetchCategory()
    },[fetchCategory])

    return (
        <aside className="widget widget-categories">
            <h2 className="sidebar-title">CATEGORY</h2>
            <ul className="sidebar-menu">
                {
                    category.map((item)=>(
                        <CategoryItem key={item.id} name={item.name} count={item.count} />
                    ))
                }
                
                {/* <CategoryItem name="Rings" count="10" />
                <CategoryItem name="Necklaces" count="15" />
                <CategoryItem name="Bracelets" count="5" />
                <CategoryItem name="Earrings" count="25" />
                <CategoryItem name="Churies" count="14" />
                <CategoryItem name="Jewelry Sets" count="20" /> */}
            </ul>
        </aside>
    )
};
