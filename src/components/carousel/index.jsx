import { useState, useEffect } from 'react';
import Cardholder from "../card-holder/index.jsx";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './carousel.css';

export default function Carousel(props) {
    const [middleElement, updateMiddleElement] = useState(2);
    const [disableLeftArrow, toggleDisableLeftArrow] = useState(false);
    const [disableRightArrow, toggleDisableRightArrow] = useState(false);
    const [cards, populateCards] = useState([]);
    if (middleElement >= props.data.length) {
        updateMiddleElement(2);
        toggleDisableLeftArrow(false);
        toggleDisableRightArrow(false);
    }

    useEffect(() => {
        populateCards(props.data.slice(middleElement - 1, middleElement + 2));
    }, [middleElement, props.data]);

    return (
        <div className="carousel-container">
            <div className={`left-arrow ${disableLeftArrow ? 'hide' : ''}`} onClick={onLeftArrowClick}><FaAngleLeft size={70} /></div>
            <Cardholder cards={cards} />
            <div className={`right-arrow ${disableRightArrow ? 'hide' : ''}`} onClick={onRightArrowClick}><FaAngleRight size={70} /></div>
        </div>
    );

    function onLeftArrowClick() {
        if ((middleElement - 2) === 0) {
            toggleDisableLeftArrow(true);
            updateMiddleElement(middleElement - 1);
        } else {
            updateMiddleElement(middleElement - 1);
            disableRightArrow && toggleDisableRightArrow(false);
        }
    }

    function onRightArrowClick() {
        if ((middleElement + 3) === props.data.length) {
            toggleDisableRightArrow(true);
            updateMiddleElement(middleElement + 1);
        } else {
            updateMiddleElement(middleElement + 1);
            disableLeftArrow && toggleDisableLeftArrow(false);
        }
    }
}