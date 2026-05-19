import { useState } from "react";
import "./App.css";
import { CardGrid } from "./components/CardGrid";

function App() {
    const [score, setScore] = useState(0);

    return (
        <div>
            <h1>Memory Game</h1>
            <p>{score}</p>
            <CardGrid
                incrementScore={() => {
                    setScore(score + 1);
                }}
            />
        </div>
    );
}

export default App;
