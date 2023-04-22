import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return (<Card 
        key={i} 
        id={robots[i].name} 
        email={robots[i].email} 
        name={robots[i].name} 

        />
        );
    }
        
        )
  return (
    <div>
        <div className='container'>
            {cardComponent}
        </div>
    </div>
  )
}

export default CardList;