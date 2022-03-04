import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from "./UncontrolledRating";
import {Rating, RatingValueType} from "./Rating";

function App() {

    let [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    return (
        <div className="App">
            <UncontrolledRating/>
            <Rating value = {ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

export default App;
