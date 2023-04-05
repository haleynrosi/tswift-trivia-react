import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import tayswift from '../images/tayswift.png'
import '../css/TaySwift.css'

function LyricTriviaKey({lyricTriviaData}){

    const Navigate = useNavigate()

    return(
        <div className='keyDiv'>
            <div className='imgButtonDiv'>
                <Button className='backButton' onClick={()=>{axios.get('/').then(
                        Navigate('/')
                        )}}>Back to Home Page
                </Button>
                <img className='taySwiftKeyPic' src={tayswift}></img>
            </div>
            
            <Card className='triviaKey'>
                <Card.Title className='text-center'>Lyric Trivia Key</Card.Title>
                <Card.Body>
                    <Row><b>Lyric: {lyricTriviaData[0].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[0].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[1].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[1].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[2].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[2].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[3].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[3].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[4].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[4].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[5].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[5].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[6].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[6].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[7].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[7].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[8].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[8].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[9].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[9].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[10].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[10].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[11].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[11].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[12].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[12].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[13].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[13].song}</Row>
                    <br/>
                    <Row><b>Lyric: {lyricTriviaData[14].lyric}</b></Row>
                    <Row>Correct Song: {lyricTriviaData[14].song}</Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LyricTriviaKey;