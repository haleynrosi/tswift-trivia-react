import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import FactTrivia from './FactTrivia';
import App from '../App';
import { Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import taypic4 from '../images/taypic4.png'
import '../css/TaySwift.css'

function FactTriviaKey({factTriviaData}){

    const Navigate = useNavigate();

    return(
        <div className='keyDiv'>
            <div className='imgButtonDiv'>
                <Button className='backButton' onClick={()=>{axios.get('/').then(
                    Navigate('/')
                )}}>Back to Home Page
                </Button>
                <img className='taySwiftKeyPic' src={taypic4}></img>
            </div>
        <Card className='triviaKey'>
            <Card.Title className='text-center'>Fact Trivia Key</Card.Title>
            <Card.Body>
                <Row> <b>{factTriviaData[0].factQ}</b></Row> 
                <Row>Answer: {factTriviaData[0].factAnswer}</Row>
                <br/>
                <Row><b>{factTriviaData[1].factQ}</b> </Row>
                <Row>Answer: {factTriviaData[1].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[2].factQ}</b></Row>
                <Row>Answer: {factTriviaData[2].factAnswer}</Row>
                <br/> 
                <Row><b>{factTriviaData[3].factQ}</b> </Row> 
                <Row>Answer: {factTriviaData[3].factAnswer}</Row>
                <br/> 
                <Row><b>{factTriviaData[4].factQ} </b> </Row>
                <Row> Answer: {factTriviaData[4].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[5].factQ}</b> </Row> 
                <Row>Answer: {factTriviaData[5].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[6].factQ}</b></Row>
                <Row> Answer: {factTriviaData[6].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[7].factQ}</b> </Row>
                <Row> Answer: {factTriviaData[7].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[8].factQ}</b> </Row>
                <Row> Answer: {factTriviaData[8].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[9].factQ}</b> </Row>
                <Row> Answer: {factTriviaData[9].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[10].factQ}</b> </Row>
                <Row>Answer: {factTriviaData[10].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[11].factQ}</b> </Row> 
                <Row>Answer: {factTriviaData[11].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[12].factQ} </b></Row>
                <Row> Answer: {factTriviaData[12].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[13].factQ}</b></Row>
                <Row> Answer: {factTriviaData[13].factAnswer}</Row>
                <br/> 
                <Row> <b>{factTriviaData[14].factQ} </b></Row> 
                <Row> Answer: {factTriviaData[14].factAnswer}</Row>
            </Card.Body>
        </Card>
        </div>
    )
}

export default FactTriviaKey;