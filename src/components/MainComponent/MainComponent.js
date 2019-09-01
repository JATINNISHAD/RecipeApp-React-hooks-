import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Recipe from '../RecipeComponent/RecipeComponent';
import Header from '../HeaderComponent/HeaderComponent';



const Main =()=>{
    return(
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={Recipe}/>
                <Route component={Recipe}/>
            </Switch>
        </div>
    );
}

export default Main;
