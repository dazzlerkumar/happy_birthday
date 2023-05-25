import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [shakeCat, setShakeCat] = useState(false);
    const shakeTheCat = () => {
        setShakeCat(true);
        setTimeout(() => {
            setShakeCat(false);
        }, 1000);
    };
    return (
        <div className="App">
            <img src="832079.jpg" className="bg" />

            <ol>
                <li>I'm grateful for the love you share,</li>
                <li>For your compassion, so rare.</li>
                <li>Your smile brightens my darkest days,</li>
                <li>Filling my hearts with endless rays.</li>
                {/* Break */}
                <li>May your dreams take flight and soar,</li>
                <li>As you embark on another year's tour.</li>
                <li>Grateful for the memories we create,</li>
                <li>Happy birthday, dear, may it be great!</li>
                {/* break */}
            </ol>
            <img
                src="cat.png"
                className={shakeCat ? "cat shake" : "cat"}
                onClick={shakeTheCat}
            />
        </div>
    );
}

export default App;
