import React, {useState} from 'react';
import Register from './components/Register'
import Intro from './components/Intro'

export default function App() {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    return (
        <div className="App">
            <Intro />
            <Register />
        </div>
    )
}

