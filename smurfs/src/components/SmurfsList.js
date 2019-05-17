import React from 'react';
import { connect } from 'react-redux';

import SmurfCard from './SmurfCard';

import { getSmurfs, deleteSmurf } from '../actions';

class SmurfsList extends React.Component{

    componentDidMount(){
        this.props.getSmurfs();
    }

    deleteSmurf = (id) => {
        this.props.deleteSmurf(id)
    }

    render(){
    return (
        <div className="smurf-list">
             <ul>{this.props.smurfs.map( smurf => {
                 return (
                 <SmurfCard 
                 key={smurf.id} 
                 smurf={smurf} 
                 deleteSmurf={this.props.deleteSmurf}
                 />
                 )
             } )}</ul>
        </div>
    )
  }
}

const mapStateToProps = state => ({  
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
})

export default connect(mapStateToProps, { getSmurfs, deleteSmurf } )(SmurfsList);