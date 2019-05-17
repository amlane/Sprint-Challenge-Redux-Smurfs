import React from 'react';
import { connect } from 'react-redux';

import SmurfCard from './SmurfCard';

import { getSmurfs } from '../actions';

class SmurfsList extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getSmurfs();
    }

    render(){
    return (
        <div className="smurf-list">
             <ul>{this.props.smurfs.map( smurf => {
                 return <SmurfCard smurf={smurf} />
             } )}</ul>
        </div>
    )
  }
}

const mapStateToProps = state => ({  
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
})

export default connect(mapStateToProps, { getSmurfs } )(SmurfsList);