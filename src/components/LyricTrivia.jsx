import React from 'react';
import Button from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Card} from 'react-bootstrap';
import { useState, useEffect } from 'react';

function LyricTrivia({lyricData}){


    // const lyricData  = [
    //     {
    //     "lyric":"The autumn chill that wakes me up, you loved the amber skies so much",
    //     "song":"Marjorie",
    //     "album":"Evermore"
    //     },
    //     {
    //       "lyric":"Loving you was like driving a new mazerati down a dead end street",
    //       "song":"Red",
    //       "album":"Red"
    //     },
    //     {
    //       "lyric":"I had a marvelous time ruinin everything",
    //       "song":"The last great american dynasty",
    //       "album":"Folklore"
    //     },
    //     {
    //       "lyric":"Soon she's gonna find stealing other people's toys on the playground won't make you many friends",
    //       "song":"Better than Revenge",
    //       "album":"Speak Now"
    //       },
    //       {
    //         "lyric":"Walls of insincerity, shifting eyes and vacancy vanished when I saw your face",
    //         "song":"Enchanted",
    //         "album":"Speak Now"
    //       },
    //       {
    //         "lyric":"And I don't know how it get's better than this, you take my hand and drag me head first",
    //         "song":"Fearless",
    //         "album":"Fearless"
    //      },
    //      {
    //         "lyric":"But I damn sure never would've danced with the devil at nineteen",
    //         "song":"Would've, should've, could've",
    //         "album":"Midnights"
    //      },
    //      {
    //         "lyric":"I'm with you even if it makes me blue",
    //         "song":"Paper rings",
    //         "album":"Lover"
    //      },
    //      {
    //         "lyric":"And you call me up again just to break me like a promise, so casually cruel in the name of being honest",
    //         "song":"All too well",
    //         "album":"Red"
    //      },
    //      {
    //         "lyric":"It's 2am, feeling like I just lost a friend",
    //         "song":"Breathe",
    //         "album":"Fearless"
    //      },

    //   ]    
    //this is where you put state
    //use variable lyrics inside the return and will put the current value in the return when rendered and state changes
    //setLyrics is a function
    const [lyrics, setLyrics] = useState(lyricData[0].lyric)
    const [countdown, setCountdown] = useState(10)
   //  const [lyricIndex, setLyricIndex] = useState(0)

    useEffect(()=>{

       if(countdown > 0 ) {
         setInterval(()=>{
        setCountdown(countdown - 1)
        },1000)
       } else if (countdown == 0){
         let lyric = lyricData.pop()
         console.log(lyric)
        setLyrics(lyric.lyric);
        setCountdown(10)
      //   setLyricIndex(lyricIndex+1)
        console.log(lyricData)
       }
    
    }, [lyricData, lyrics])

    return(
        <div>
        <h1>Lyric Trivia</h1>
        <h4>What song and album are these lyrics from?</h4>
        <Card>
            <Col>{lyrics}
            </Col>
        </Card>
        <div>{countdown}</div>
        {/* <button onClick={()=>{setLyrics('Loving you was red')}}>Next</button> */}
        </div>
    )
}

export default LyricTrivia;