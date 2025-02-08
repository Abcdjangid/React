import React, { useState } from 'react'

const Joke = () => {
    const [joke, setJoke] = useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke))
            .catch((err) => setJoke("Failed to fetch joke. Please try again."))
    }

    return (
        <>
            <div className='joke'>
                <div className='button_container'>
                    <button onClick={fetchApi}>Click to generate a joke.</button>
                </div>
                <p>{joke}</p>
            </div>
        </>
    )
}

export default Joke