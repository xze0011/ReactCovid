import React from 'react';
import ReactDOM from 'react-dom';


///  实现子传父

class Par extends React.Component{
    constructor(props){
        super(props)
        this.state={
            childData:null
        }
    }
    render(){
        return(
            <div>
                <h1>子元素传递给父元素的数据：{this.state.childData}</h1>
                <Children setChildData={this.setChildData}/> 
                </div>
        )
    }
    //如果使用箭头函数就不需要 this.setChildData = this.setChildData(this)
    setChildData=(e)=>{
        this.setState({
            childData:e
        })
    }
}


class Children extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:'对对对'
        }


    }
    render(){
        return(
            <div>
                <button onClick={this.sendData}>传递对对对给父元素</button>
                <button onClick={()=>{this.props.setChildData('太细了')}}>传递其他值给父元素</button>
            </div>
        )
    }
    sendData=()=>{
        // 修改父元素的setState函数     +  参数值为： 子元素的data
        this.props.setChildData(this.state.data)
    }
}


export default Par;