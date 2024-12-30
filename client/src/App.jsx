import React, {useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Landing from './components/landing.tsx';
import Main from './components/main.jsx';
import './App.css'

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const [authenticated, setAuthenticated] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;

  return (
    <div>
    {isMobile ? 
        <div className="mobile">
            <div className="mobileheader">
            <Typewriter
                options={{
                    autoStart: true,
                    delay: 25,
                    cursor: ""

                }}
                onInit={(typewriter) => {
                    typewriter.typeString("Sorry, but Will Toth's personal portfolio currently does not support mobile.")
                        .start();
                }}
            />
            <br/>
            <Typewriter
                options={{
                    autoStart: true,
                    delay: 25,
                    cursor: ""

                }}
                onInit={(typewriter) => {
                    typewriter.pauseFor(3000).typeString("Please open in a web browser :)")
                        .start();
                }}
            />
            </div>
        </div> 
    : 
        <div>
            {authenticated ? <Main/> : <Landing setAuthenticated={setAuthenticated}/>}
        </div>}
</div>
  )
}

export default App
