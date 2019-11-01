import React from 'react';
import CardsList from '../../components/cards/CardsList';
import Typography from '@material-ui/core/Typography';
import './Plans.css';

const Why = () => {



    return (
        <>
            <div className="title">
                <Typography gutterBottom variant="h4" component="h2">
                    Choose a plan that suits your needs
                </Typography>
            </div>
            
            <div className="card-list">
               <CardsList /> 
            </div>
            
        </>
    )
}

export default Why;