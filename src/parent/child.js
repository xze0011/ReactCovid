import React, { Children } from 'react';
import ReactDOM from 'react-dom';


class Child extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let strClass =null;
        if(this.props.isActive){
            strClass = '_active';
        }else{
            strClass = '_inactive';
        }
        return(
            <div className={"content"+ strClass}>
            "I am a child"
            </div>
        )

    }
}

export default Child;
