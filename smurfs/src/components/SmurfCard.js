import React from 'react';

function SmurfCard(props){
    return(
        <div className="smurf-card">
            <li className="name">{props.smurf.name}</li>
            <li><span>Age: </span>{props.smurf.age}</li>
            <li><span>Height: </span>{props.smurf.height}</li>
            <li onClick={props.deleteSmurf}><i className="far fa-trash-alt"></i></li>
        </div>
    )
}

export default SmurfCard;