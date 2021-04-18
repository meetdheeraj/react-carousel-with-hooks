import Card from "../card/index";
import './card-holder.css';

export default function CardHolder(props) {
  return <div className="card-holder">
    {props.cards.map(item =>
      <Card key={item.id} image={item.image.src} alt={item.image.alt}
        name={item.name} price={item.price} category={item.category} />
    )}
  </div>
}