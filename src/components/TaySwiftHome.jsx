import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TriviaHome from './TriviaHome';
import Button from 'react-bootstrap/esm/Button';
import '../css/TaySwift.css';

function TaySwiftHome(){
    return(
        <div className='tayHome'>
            <h1>Taylor Swift Trivia</h1>
                <Link to = '/trivia-home' className='goLink'>
                    <Button className='goButton'>Go!</Button> 
                </Link>
        </div>
    )
}

export default TaySwiftHome;