import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Card} from 'react-bootstrap';

function FactTrivia(){
    return(
        <div>
        <h1>Fact Trivia</h1>
        <h4>Question:</h4>
        <Card>
            <Col>How old was Taylor Swift when she released her debut album?</Col>
        </Card>
        </div>
    )
}

export default FactTrivia;