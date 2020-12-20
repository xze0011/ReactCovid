import React from 'react';
import ReactDOM from 'react-dom';
import './tab.css' 



class Tab extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            c1: 'Content_active',
            c2: 'Content_default'
        }
        this.clickEvent = this.clickEvent.bind(this)
    }
    
    //点击事件
    clickEvent(e){
        
        let index = e.target.dataset.index;
        if(index == '1'){
            this.setState({
                c1: 'Content_active',
                c2: 'Content_default'
            })}else{
                this.setState({
                    c1: 'Content_default',
                    c2: 'Content_active'
                })
            }
                

        }

    

    render(){
        return(
            <div>
                <button data-index="1" onClick={this.clickEvent}>Content 1</button>
                <button data-index="2" onClick={this.clickEvent}>Content 2</button>
                <div className={this.state.c1}>
                    <h1>Content1</h1> 
                    </div>
                    <div className={this.state.c2}>
                    <h1>Content2</h1> 
                    </div>
            </div>
        )
    }

  }

  export default Tab;