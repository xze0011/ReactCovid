import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child'
import './parent.css'


// 1.父元素 中使用state 去  调用<child />   
// 2. 通过parameter/props 把 props 传递给 子元素
// 3. 通过拿到的props 来进行 子元素的行为

class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            isActive: true
        }
        this.changeShow = this.changeShow.bind(this);
    }
    
    render(){

        //这里把父元素的 state/数据 传给了子元素， 子元素以props 接受
        return(
            <div>
                <button onClick={this.changeShow}> 控制子元素的显示  </button>
                <Child isActive = {this.state.isActive}/>
            </div>
        )

    }
    changeShow(){
        this.setState({
            isActive:!this.state.isActive
        })

    }
}



export default Parent;