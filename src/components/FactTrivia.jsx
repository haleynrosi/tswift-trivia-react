import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import FactTriviaKey from './FactTriviaKey';
import { Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/TaySwift.css'


function FactTrivia({factData}){
    
    
    
    const [facts, setFacts] = useState(
        {
          factQuestion: factData[0].factQ,
          countDown: 5,
          factIndex: factData[0].index
        }
      )

      const navigate = useNavigate();
    
      useEffect(()=>{
        const interval = setInterval(()=>{
          const countDown = facts.countDown;
          if(countDown<=5 && countDown>0){
            setFacts({
              //you use this below to access the properties of a json object(a copy of it) without having to write a bunch of other code
              ...facts,
              factQuestion:facts.factQuestion,
              countDown:countDown-1,
              factIndex:facts.factIndex
            });
          } else if(countDown===0 && facts.factIndex===6){
            navigate('/fact-trivia-key')
          } else{
            const nextFact = factData[facts.factIndex+1];
            const nextFactQuestion= nextFact.factQ;
            const nextIndex = nextFact.index;
            setFacts({
              ...facts,
              factQuestion:nextFactQuestion,
              countDown:5,
              factIndex:nextIndex
            });
          }
        }, 1000);
  
        return () =>{
          clearInterval(interval);
        }
      
      }, [factData, facts])

    return(
        <div>
        <h1>Fact Trivia</h1>
        <h4>Question:</h4>
        <Card className='triviaCard'>
        <Card.Body>
          <Card.Title>{facts.factQuestion}</Card.Title>
          </Card.Body>
        </Card>
        <br/>
        <div className="m-30">
          <h1>{facts.countDown}</h1>
        </div>
        </div>
    )
}

export default FactTrivia;