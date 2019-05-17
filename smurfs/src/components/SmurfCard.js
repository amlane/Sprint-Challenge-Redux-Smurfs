import React from 'react';

function SmurfCard(props){
    return(
        <div className="smurf-card">
            <li><span>Name: </span>{props.smurf.name}</li>
            <li><span>Age: </span>{props.smurf.age}</li>
            <li><span>Height: </span>{props.smurf.height}</li>
        </div>
    )
}

export default SmurfCard;