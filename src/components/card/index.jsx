import "./card.css";
export default function Card(props) {
    console.log("*************card###", props);
    const {id, name, image, alt, category, price} =props;
    console.log("######",id, name, image, alt, category, price);
    return (<div className="card-container" id={id}>
        <div className="category">{category}</div>
        <div className="image"><img src={image} alt={alt}></img></div>
        <div className="name">{name}</div>
        <div className="price">Rs. {price}</div>
    </div>)
}