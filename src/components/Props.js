import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container  } from 'react-bootstrap';


const Props = ({ props }) => {

    const states = [
        
        {
            name: "kerala", language: "malayalam",
            name: "delhi", language: "hindi",
            name: "Andrapredesh", language: "andra",
            name: "bangalore", language: "kannada"
            
        }
    ]

    return (
        <div>

            { states.map((state) => (
    
            <Container>
            <div >
    
            </div>
    
        <h1>{language.props}</h1>
        </Container>
            ))
    
            }
        </div>
  );
};


export default Props;