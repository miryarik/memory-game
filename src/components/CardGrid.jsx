import { useEffect, useState } from "react";
import { getCharacters } from "../utils";
import { Card } from "./Card";

export function CardGrid({ incrementScore }) {
    const [characters, setCharacters] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        let ignore = false;

        async function loadCards() {
            const chars = await getCharacters();
            setCharacters(chars);
        }

        if (!ignore) loadCards();

        return () => {
            ignore = true;
        };
    }, []);

    function shuffleCharacters() {
        // iterate array from i = last to first
        // for each element at index i,
        // pick a random index r before it
        // and swap arr[i] and arr[r]

        const shuffled = [...characters];

        for (let i = characters.length - 1; i > 0; i--) {
            // random() * i may be greater than i
            // floor it
            const random = Math.floor(Math.random() * i);
            [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
        }

        setCharacters(shuffled);
    }

    // todo
    function handleCardClick() {
        // check if card is marked
        // if already marked
        // set game over
        // else shuffle & increment score
    }

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 240px)",
                gap: "20px",
                justifyContent: "center",
                justifyItems: "center",
            }}
        >
            {isGameOver ? (
                <h2>Game Over!</h2>
            ) : (
                characters.map((character) => (
                    <Card
                        key={character.id}
                        character={character}
                        shuffle={shuffleCharacters}
                        setIsGameOver={setIsGameOver}
                        incrementScore={incrementScore}
                    />
                ))
            )}
        </div>
    );
}
