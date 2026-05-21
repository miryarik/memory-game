import { useState } from "react";
import styles from "../stylesheets/Card.module.css";

export function Card({ character, handleCardClick }) {
    const [marked, setMarked] = useState(false);

    function handleClick() {
        // wrapper on the parents handler
        // to avoid parent setting marked
        handleCardClick(marked);
        if (!marked) setMarked(true);
    }

    return (
        <div className={styles.card} onClick={handleClick}>
            <img src={character.image} alt={character.name} />

            <p>{character.name}</p>
        </div>
    );
}
