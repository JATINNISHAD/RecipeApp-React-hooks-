import React from 'react';

const SingleRecipe =({ingre})=>(
    <div className="container">
        <h5>Ingredients</h5>
        {ingre.map((ing)=>(
            <h6>{ing.text}</h6>
        ))}
    </div>
);

export default SingleRecipe;