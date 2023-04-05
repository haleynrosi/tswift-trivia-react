import logo from './logo.svg';
import './App.css';

import TaySwiftHome from './components/TaySwiftHome';
import TriviaHome from './components/TriviaHome';
import LyricTrivia from './components/LyricTrivia';
import FactTrivia from './components/FactTrivia';
import FactTriviaKey from './components/FactTriviaKey';
import LyricTriviaKey from './components/LyricTriviaKey';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {

  const factData = [
    {
      "factQ":"How old was Taylor Swift when she released her debut album?",
      "factAnswer": "16",
      "index":0,
    },
    {
      "factQ":"What was the first song Taylor wrote for her album folklore?",
      "factAnswer": "my tears ricochet",
      "index":1
    },
    {
      "factQ":"How many times does Taylor sing the lyrics ~ that's my man ~ in her song willow?",
      "factAnswer": "13",
      "index":2
    },
    {
      "factQ":"Where did the folklore photoshoot take place?",
      "factAnswer": "Blake Lively and Ryan Reynolds lake house.",
      "index":3
    },
    {
      "factQ":"What city was taylor in when she wrote her song Lover?",
      "factAnswer": "Nashville",
      "index":4
    },
    {
      "factQ":"How many grammy's has Taylor Swift won?",
      "factAnswer": "11",
      "index":5
    },
    {
      "factQ":"How many times has Taylor Swift recieved a grammy nomination?",
      "factAnswer": "46 grammy nominations",
      "index":6
    },
    {
      "factQ":"How many Billboard Music Awards has Taylor swift been rewarded?",
      "factAnswer": "29",
      "index":7
    },
    {
      "factQ":"How many CMA Awards has Taylor Swift been rewarded?",
      "factAnswer": "12",
      "index":8
    },
    {
      "factQ":"What award was Taylor Swift honored with from the Nashville Songwriters Association International in 2019?",
      "factAnswer": "Songwriter-Artist of the Decade",
      "index":9
    },
    {
      "factQ":"On what song did Taylor Swift collaborate with both Tim McGraw and Keith Urban?",
      "factAnswer": "Highway Don't Care",
      "index":10
    },
    {
      "factQ":"In 2014, what streaming service did Taylor Swift remove her entire catalog from?",
      "factAnswer": "Spotify",
      "index":11
    },
    {
      "factQ":"What company did Taylor Swift criticize in an open letter for not offering royalties to artists during the streaming service's three-month free trial period?",
      "factAnswer": "Apple Music",
      "index":12
    },
    {
      "factQ":"What albums does Taylor Swift actually own?",
      "factAnswer": "Folklore, Evermore, Midnights, Lover, Fearless(Taylor's Version), Red(Taylor's version)",
      "index":13
    },
    {
      "factQ":"What are the names of all three of Taylor Swift's Cats?",
      "factAnswer": "Meredith Grey, Olivia Benson, and Benjamin Button",
      "index":14
    }
  ]


  const lyricData  = [
    {
    "lyric":"The autumn chill that wakes me up, you loved the amber skies so much",
    "song":"Marjorie",
    "album":"Evermore",
    "index": 0
    },
    {
      "lyric":"Loving you was like driving a new mazerati down a dead end street",
      "song":"Red",
      "album":"Red",
      "index": 1
    },
    {
      "lyric":"I had a marvelous time ruinin everything",
      "song":"The last great american dynasty",
      "album":"Folklore",
      "index": 2
    },
    {
      "lyric":"Soon she's gonna find stealing other people's toys on the playground won't make you many friends",
      "song":"Better than Revenge",
      "album":"Speak Now",
      "index": 3
      },
      {
        "lyric":"Walls of insincerity, shifting eyes and vacancy vanished when I saw your face",
        "song":"Enchanted",
        "album":"Speak Now",
        "index": 4
      },
      {
        "lyric":"And I don't know how it get's better than this, you take my hand and drag me head first",
        "song":"Fearless",
        "album":"Fearless",
        "index": 5
     },
     {
        "lyric":"But I damn sure never would've danced with the devil at nineteen",
        "song":"Would've, should've, could've",
        "album":"Midnights",
        "index": 6
     },
     {
        "lyric":"I'm with you even if it makes me blue",
        "song":"Cruel Summer",
        "album":"Lover",
        "index": 7
     },
     {
        "lyric":"And you call me up again just to break me like a promise, so casually cruel in the name of being honest",
        "song":"All too well",
        "album":"Red",
        "index": 8
     },
     {
        "lyric":"It's 2am, feeling like I just lost a friend",
        "song":"Breathe",
        "album":"Fearless",
        "index": 9
     },
     {
      "lyric":"Draw the cat eyes sharp enough to kill a man",
      "song":"Vigilante Shit",
      "album":"Midnights",
      "index": 10
     },
     {
      "lyric":"Take me to the lakes where all the poets went to die",
      "song":"the lakes",
      "album":"single",
      "index": 11
    },   
    {
      "lyric":"I parked my car right between the Methodist and the school that used to be ours",
      "song":"tis the damn season",
      "album":"evermore",
      "index": 12
    },
    {
      "lyric":"You wear your best apology, but I was there to watch you leave",
      "song":"The Last Time",
      "album":"Red",
      "index": 13
    },
    {
      "lyric":"What started in beautiful rooms, Ends with meetings in parking lots",
      "song":"illicit affairs",
      "album":"folklore",
      "index": 14
    }

  ]    
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route exact path='/' element={<TaySwiftHome/>}/>
           <Route path='/trivia-home' element={<TriviaHome/>}/>
           <Route path='/lyric-trivia' element={<LyricTrivia lyricData= {lyricData}/>}/>
           <Route path='/fact-trivia' element={<FactTrivia factData={factData}/>}/>
           <Route path='/lyric-trivia-key' element={<LyricTriviaKey lyricTriviaData= {lyricData}/>}/>
           <Route path='/fact-trivia-key' element={<FactTriviaKey factTriviaData={factData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
