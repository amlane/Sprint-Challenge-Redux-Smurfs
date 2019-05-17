import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

const SmurfsList = props => {

    const getSmurfs = e => {
        e.preventDefault();
        this.props.getSmurfs()
    }


    return (
        <div>
            <h2>Hello from the Smurfs List!</h2>
            <button onClick={getSmurfs}>Fetch Smurfs</button>
             <p>placeholder for where smurfs will render</p>
        </div>
    )
}

const mapStateToProps = state => ({  
    smurfs: state.smurfs,
    fetchingSmurfs: this.fetchingSmurfs
})

export default connect(mapStateToProps, { getSmurfs } )(SmurfsList);