import React,{useState,useEffect} from 'react';
import RecipeList from '../RecipeList/RecipeList';
import Keys from '../../config';


const Recipe =()=>{
    const app_Id=Keys.App_ID;
    const app_Key=Keys.App_Key;

    const [recipes,setRecipes] = useState([]);
    const [recipeName,setRecipeName] = useState('');
    const [query,setQuery] = useState('chicken');
    

    useEffect(()=>{
        getRecipes();
    },[query]);

    
    const getRecipes=(e)=>{
        
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_Id}&app_key=${app_Key}`)
        .then((response)=>response.json())
        .then((json)=>setRecipes(json.hits))
        //.then((json)=>console.log(json.hits))
    };

    const updateSearch = e =>{
        setRecipeName(e.target.value);
        console.log(recipeName);
    }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(recipeName);
    }


    return(
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input value={recipeName} className="search-bar" type="text" onChange={updateSearch} />
                <button className="search-button" type="submit">search</button>
            </form>
            <hr/>
            <RecipeList rep={recipes}/>
        </div>
    );
}
export default Recipe;

