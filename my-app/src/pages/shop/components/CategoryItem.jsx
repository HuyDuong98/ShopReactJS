export default function CategoryItem({name, count}) {
    return (
        <li>
            <a href="#">
                <span className="widget-hover">{name}</span>
                <span>({count})</span>
            </a>
        </li>
    )
};
