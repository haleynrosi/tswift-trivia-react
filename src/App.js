import logo from './logo.svg';
import './App.css';

import TaySwiftHome from './components/TaySwiftHome';
import TriviaHome from './components/TriviaHome';
import LyricTrivia from './components/LyricTrivia';
import FactTrivia from './components/FactTrivia';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {
  const lyricData  = [
    {
    "lyric":"The autumn chill that wakes me up, you loved the amber skies so much",
    "song":"Marjorie",
    "album":"Evermore"
    },
    {
      "lyric":"Loving you was like driving a new mazerati down a dead end street",
      "song":"Red",
      "album":"Red"
    },
    {
      "lyric":"I had a marvelous time ruinin everything",
      "song":"The last great american dynasty",
      "album":"Folklore"
    },
    {
      "lyric":"Soon she's gonna find stealing other people's toys on the playground won't make you many friends",
      "song":"Better than Revenge",
      "album":"Speak Now"
      },
      {
        "lyric":"Walls of insincerity, shifting eyes and vacancy vanished when I saw your face",
        "song":"Enchanted",
        "album":"Speak Now"
      },
      {
        "lyric":"And I don't know how it get's better than this, you take my hand and drag me head first",
        "song":"Fearless",
        "album":"Fearless"
     },
     {
        "lyric":"But I damn sure never would've danced with the devil at nineteen",
        "song":"Would've, should've, could've",
        "album":"Midnights"
     },
     {
        "lyric":"I'm with you even if it makes me blue",
        "song":"Paper rings",
        "album":"Lover"
     },
     {
        "lyric":"And you call me up again just to break me like a promise, so casually cruel in the name of being honest",
        "song":"All too well",
        "album":"Red"
     },
     {
        "lyric":"It's 2am, feeling like I just lost a friend",
        "song":"Breathe",
        "album":"Fearless"
     },

  ]    
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route exact path='/' element={<TaySwiftHome/>}/>
           <Route path='/trivia-home' element={<TriviaHome/>}/>
           <Route path='/lyric-trivia' element={<LyricTrivia lyricData= {lyricData}/>}/>
           <Route path='/fact-trivia' element={<FactTrivia/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
