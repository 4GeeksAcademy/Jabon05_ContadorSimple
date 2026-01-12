import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import "bootstrap-icons/font/bootstrap-icons.css";

// components
import Home from './components/Home';
import SecondsCounter from "./components/SecondsCounter";

const root = ReactDOM.createRoot(document.getElementById('root'));
let counter = 0;
let countdown = 100;
const alertAt = 10; 

setInterval(() => {
    counter++;
    countdown--;

    if (counter === alertAt) {
        alert("¡Has alcanzado el tiempo programado!");
    }
    
    root.render(
        <React.StrictMode>
            <SecondsCounter seconds={counter} />
        </React.StrictMode>
    );
}, 1000);
