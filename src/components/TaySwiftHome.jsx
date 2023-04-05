import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TriviaHome from './TriviaHome';
import Button from 'react-bootstrap/esm/Button';
import taypic2 from '../images/taypic2.png';
import taypic5 from '../images/taypic5.png';
import taypic6 from '../images/taypic6.png';
import taypic3 from '../images/taypic3.png';
import '../css/TaySwift.css';

function TaySwiftHome(){
    return(
        <div className='tayHome'>
            <h1>Taylor Swift Trivia</h1>
                <Link to = '/trivia-home' className='goLink'>
                    <Button className='goButton'>Go!</Button> 
                </Link>
                <div className='picRow'>
                    <img className='homePagePics' src={taypic2}></img>
                    <img className='homePagePics' src={taypic5}></img>
                    <img className='homePagePics' src={taypic6}></img>
                </div>
        </div>
    )
}

export default TaySwiftHome;