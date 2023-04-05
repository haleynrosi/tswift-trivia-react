import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/TaySwift.css'

function LyricTrivia({lyricData}){

    //this is where you put state
    //use variable lyrics inside the return and will put the current value in the return when rendered and state changes
    //setLyrics is a function

    //below we are setting the state of the lyrics to a json object that accesses the json object
    //we created in App.js for lyricData at the initial state we need it for each new lyric trivia card.
    const [lyrics, setLyrics] = useState(
      {
        lyricName: lyricData[0].lyric,
        countDown: 5,
        lyricIndex: lyricData[0].index
      }
    )

    
    const navigate = useNavigate();
    
    useEffect(()=>{
      const interval = setInterval(()=>{
        const countDown = lyrics.countDown;
        if(countDown<=5 && countDown>0){
          setLyrics({
            //you use this below to access the properties of a json object without having to write a bunch of other code
            ...lyrics,
            lyricName:lyrics.lyricName,
            countDown:countDown-1,
            lyricIndex:lyrics.lyricIndex
          });
        } else if(countDown===0 && lyrics.lyricIndex===4){
          
            navigate('/lyric-trivia-key')
      
        } else{
          const nextLyric = lyricData[lyrics.lyricIndex+1];
          const nextLyricName= nextLyric.lyric;
          const nextIndex = nextLyric.index;
          setLyrics({
            ...lyrics,
            lyricName:nextLyricName,
            countDown:5,
            lyricIndex:nextIndex
          });
        }
      }, 1000);

      return () =>{
        clearInterval(interval);
      }
    
    }, [lyricData, lyrics])

    return(
        <div>
        <h1>Lyric Trivia</h1>
        <br/>
        <h3>What song are these lyrics from?</h3>
        <Card className="triviaCard">
          <Card.Body>
          <Card.Title>{lyrics.lyricName}</Card.Title>
          </Card.Body>
        </Card>
        <br/>
        <div className="m-30">
          <h1>{lyrics.countDown}</h1>
        </div>
        {/* <button onClick={()=>{setLyrics('Loving you was red')}}>Next</button> */}
        </div>
    )
}

export default LyricTrivia;