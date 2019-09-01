import React from 'react';
import SingleRecipe from '../SingleRecipeComponent/SingleRecipe';
import './style.css';


const RecipeList = ({rep})=>{

    return(
        <div className="container">
            <div className="row">
                {
                    rep.map((recipe)=>(
                        
                        <div className="col-sm-4">
                            <div className="card" style={{margin:4}} >
                                <div className="inner">
                                    <img className="card-img-top shadow" src={recipe.recipe.image} alt="Card image"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.recipe.label}</h5>
                                    <SingleRecipe ingre={recipe.recipe.ingredients} image={recipe.recipe.image} />
                                </div>
                            </div>
                        </div>
                    
                    ))
                }
            </div>
        </div>
    );
}

export default RecipeList;