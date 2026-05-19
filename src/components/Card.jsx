import { useState } from "react";
import styles from "../stylesheets/Card.module.css";

export function Card({ character, shuffle, setIsGameOver, incrementScore }) {
    const [marked, setMarked] = useState(false);

    return (
        <div
            className={styles.card}
            onClick={() => {
                if (!marked) {
                    incrementScore();
                    setMarked(true);
                    shuffle();
                } else {
                    setIsGameOver(true);
                }
            }}
        >
            <img src={character.image} alt={character.name} />

            <p>{character.name}</p>
        </div>
    );
}
