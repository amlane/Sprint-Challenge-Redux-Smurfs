import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

const SmurfsList = props => {

    const getSmurfs = e => {
        e.preventDefault();
        console.log("clicked")
        props.getSmurfs();
    }


    return (
        <div>
            <h2>Hello from the Smurfs List!</h2>
            <button onClick={getSmurfs}>Fetch Smurfs</button>
             <p>{props.smurfs.map( smurf => {
                 return <p>{smurf.name}</p>
             } )}</p>
        </div>
    )
}

const mapStateToProps = state => ({  
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
})

export default connect(mapStateToProps, { getSmurfs } )(SmurfsList);