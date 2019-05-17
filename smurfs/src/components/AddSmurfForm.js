import React from 'react';

class AddSmurfForm extends React.Component{

    render(){
        return (
            <form className="add-smurf-form">
                <input
                placeholder="name"
                name="name"
                />
                <input
                placeholder="age"
                name="age"
                 />
                <input
                placeholder="height"
                name="height"
                 />
                <button>+</button>
            </form>
        )
    }
}

export default AddSmurfForm;