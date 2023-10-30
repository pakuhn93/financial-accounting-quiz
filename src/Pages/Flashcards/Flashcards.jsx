import './flashcards.css';
import vocab from '../../utils/vocab.json';
import randNum from '../../utils/randNum';
import { useEffect, useState } from 'react';

export default function Flashcards(){
    console.log(vocab);
    const [card, setCard] = useState({});
    // front is true, back is false
    const [front, setFront] = useState(true);

    const clickCard = (event) => {
        console.log('CARD CLICKED', card.term);
        
        // check which side of the card we're on
        if(front){ 
            console.log(front);
            setFront(false);
        } else if (!front){
            setFront(true);
            setCard(vocab[randNum(vocab.length)]);
        }
    }

    useEffect(() => {
        setCard(vocab[randNum(vocab.length)]);
        setFront(true);
    }, []);

    return (
        <section id='flashcard' onClick={() => clickCard(event)}>
            <h1>Flashcards (click me!)</h1>
            {front ? (<div>Term: {card.term}</div>) : (<div>Definition: {card.definition}</div>)}
        </section>
    );
}