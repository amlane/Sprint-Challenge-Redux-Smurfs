import React from 'react';
import { connect } from 'react-redux';

import SmurfCard from './SmurfCard';

import { getSmurfs } from '../actions';

const SmurfsList = props => {

    const getSmurfs = e => {
        e.preventDefault();
        console.log("clicked")
        props.getSmurfs();
    }


    return (
        <div>
            <button onClick={getSmurfs}>Fetch Smurfs</button>
             <p>{props.smurfs.map( smurf => {
                 return <SmurfCard smurf={smurf} />
             } )}</p>
        </div>
    )
}

const mapStateToProps = state => ({  
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
})

export default connect(mapStateToProps, { getSmurfs } )(SmurfsList);