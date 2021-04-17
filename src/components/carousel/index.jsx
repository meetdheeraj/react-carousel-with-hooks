import { useState, useEffect } from 'react';
import Cardholder from "../card-holder/index.jsx";
import data from "../../data.json";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './carousel.css';

export default function Carousel() {
    const [middleElement, updateMiddleElement] = useState(1);
    const [cards, populateCards] = useState([]);


    useEffect(() => {
        populateCards(data.slice(middleElement - 1, middleElement + 2));
    }, [middleElement]);

    return (
        <div className="carousel-container">
            <div className="left-arrow" onClick={onLeftArrowClick}><FaAngleLeft size={70}/></div>
            <Cardholder cards={cards} />
            <div className="right-arrow" onClick={() => updateMiddleElement(middleElement + 1)}><FaAngleRight size={70}/></div>
        </div>
    );

    function onLeftArrowClick() {
        updateMiddleElement(middleElement - 1);
    }
}