import React from 'react'

function Home({ step }) {
    return (
        <div>
            <h1>Home</h1>
            <h3>Welcome to the Kagesite Brand Form App</h3>
            <p>Please click the button below to get started!</p>
            <button onClick={() => step(1)}>Start</button>
        </div>
    )
}

export default Home
