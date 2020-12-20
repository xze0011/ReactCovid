import React from 'react';
import ReactDOM from 'react-dom';



class Clock extends React.Component{
    constructor(props){
      super(props)
      //state == data
      this.state = {
        time:new Date().toLocaleTimeString()
      }
  
    }
    render(){
      // this.state.time = new Date().toLocaleTimeString();
      return(
        <div> 
          <h1>当前时间:{this.state.time}</h1>
        </div>
      )
    }
    /// 放置setInterval 的函数     改变数据 state   但是不会重新   渲染最底下的reactdom.render() 函数 因此， 使用this.setState
    componentDidMount(){
      setInterval(()=>{
        // this.state.time = new Date().toLocaleTimeString(); 不要这样修改
  
        //setState 方法  用来在 didmount 里修改数据
        this.setState({
          time:new Date().toLocaleTimeString()
        })
      },1000)
      
  
    }
  
  //  执行间隔函数   “当前时间” 的构造函数constructor不会被重新调用

// setInterval(()=>{                                               
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )

// },1000)
  
  }





  

  export default Clock;