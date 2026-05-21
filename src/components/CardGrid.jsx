import { useState } from "react";
import { Card } from "./Card";
import Banner from "./Banner";
import lossGif from "/loss.gif";

export function CardGrid({ characters, onIncrementScore }) {
    const [isGameOver, setIsGameOver] = useState(false);

    function handleCardClick(marked) {
        // check if card is marked
        // if already marked
        // set game over
        // else shuffle & increment score
        if (!marked) {
            onIncrementScore();
        } else {
            setIsGameOver(true);
        }
    }

    return isGameOver ? (
        <Banner imgSrc={lossGif} label={"LOL! You suck at this!"} />
    ) : (
        <div
            style={{
                margin: "50px",
                display: "grid",
                gridTemplateColumns:
                    "repeat(auto-fill, minmax(var(--card-size), 1fr))",
                gap: "20px",
                justifyContent: "center",
                justifyItems: "center",
            }}
            className="card-grid"
        >
            {characters.map((character) => (
                <Card
                    key={character.id}
                    character={character}
                    handleCardClick={handleCardClick}
                />
            ))}
        </div>
    );
}
