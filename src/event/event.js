import React from 'react';
import ReactDOM from 'react-dom';


///  多元素传参

class EventPar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div onClick={this.parentEvent}>
                <div className='child'>
                    <h1>Event</h1>

                </div>
            </div>
        )
    }
    // //<div onClick={this.parentEvent}  这里的传值 不能写成{this.parentEvent("123")}  
    // 这样会直接调用   要使用 onClick={(e)=>{this.parentEven(a,b,c,d)}         }    >
    //             <div className='child'>  
    //                 <h1>Event</h1>

    //             </div>
    //         </div>

    
    // 阻止默认必须使用 e.preventDefault
    parentEvent=(e)=>{
        console.log(e)
    }
}


export default EventPar;