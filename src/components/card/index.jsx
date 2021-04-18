import "./card.css";
export default function Card(props) {
    const { name, image, alt, category, price } = props;
    return (
        <div className="card-container">
            <div className="category">{category}</div>
            <div className="image"><img src={image} alt={alt}></img></div>
            <div className="name">{name}</div>
            <div className="price">Rs. {price}</div>
        </div>
    )
}