import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom';
import '../css/TaySwift.css'

function TriviaHome(){
    return(

        <div>
             <h1><Badge bg="dark">Pick your Trivia</Badge></h1>
            <Stack direction='horizontal' gap={2} className="buttonStack">
                <Link to='/lyric-trivia'>
                    <Button className='lyricButton'>
                        Lyrics
                    </Button>
                </Link>
                <Link to='/fact-trivia'>
                    <Button className='factButton'>
                        Fun Facts
                    </Button>
                </Link>
            </Stack>
        </div>
    )
}

export default TriviaHome;