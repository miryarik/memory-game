import { useEffect, useState } from "react";
import "./App.css";
import { CardGrid } from "./components/CardGrid";
import { getCharacters } from "./utils";
import Banner from "./components/Banner";
import loadinGif from "/loader.gif";
import victoryGif from "/victory.gif";

function App() {
    const [score, setScore] = useState(0);
    const [characters, setCharacters] = useState([]);

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

    return (
        <main>
            <header>
                <h1>Remembrick</h1>
                <p>
                    Score: {score} / {characters.length}
                </p>
            </header>
            <div
                style={{
                    flex: 1,
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                }}
            >
                {score == characters.length && characters.length > 0 ? (
                    <Banner imgSrc={victoryGif} label={"YOU beat ME!?"} />
                ) : characters.length <= 0 ? (
                    <Banner imgSrc={loadinGif} label={"Loading..."} />
                ) : (
                    <CardGrid
                        characters={characters}
                        onIncrementScore={() => {
                            const newScore = score + 1;
                            setScore(newScore);
                            if (newScore < characters.length)
                                shuffleCharacters();
                        }}
                    />
                )}
            </div>
        </main>
    );
}

export default App;
