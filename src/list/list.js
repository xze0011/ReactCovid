import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import covidData  from '../covidProject/covidData.json'

// 列表的渲染   列表将是一个数组

let arr = ["White","Black","Blue"];
// 把arr 变成jsx对象 数组形式       let arrHtml = [<li>white</li>  ,<li>white</li> ,<li>white</li>    ]


class List extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[{id: 1,title:"React" },{id: 2,title:"Vue"},{id: 3,title:"Angular"}]
        }
    }
    render(){
        let listArr = this.state.list.map((item,index)=>{
            return(
                <li key={index}>
                        <h3>这个是title{item.title}</h3>
                        <p>这是id{item.id}</p>
                        <p>这是index{index}</p>

                    </li>
            )
        })

        
        return(
            <div>
                <ul>
                    {listArr}

                    </ul>
            </div>
        )
    }
}

export default List;