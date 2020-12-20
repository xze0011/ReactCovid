import React from 'react';
import ReactDOM from 'react-dom';
import covidData from './covidData.json'
import covid from './covid.css'

//Pending
let Country = {
    
}

covidData.data.FAutoforeignList.forEach((item,i) => {
    if(Country[item.name] == undefined){
        Country[item.name] = {nowConfirm:0,confirm:0,heal:0,dead:0,}
    } 
    item.nowConfirm = item.nowConfirm?item.nowConfirm:0;
    item.confirm = item.confirm?item.confirm:0;
    item.heal = item.heal?item.heal:0;
    item.dead = item.dead?item.dead:0;

    Country[item.name] = {
        nowConfirm:Country[item.name].nowConfirm + item.nowConfirm,
        confirm:Country[item.name].confirm + item.confirm,    
        heal:Country[item.name].heal + item.heal,
        dead:Country[item.name].dead + item.dead,
     }
});

   let dataArr = [];
    for( const key in Country){
        Country[key].country = key;
        dataArr.push(Country[key]);
    }
    console.log(Country);
    console.log(dataArr);

    // sort the dataArr
     export let dataArrSort = dataArr.sort((a,b)=>{
        if(a.nowConfirm < b.nowConfirm){
            return 1;
        }else{
            return -1;
        }

    });

    console.log(dataArrSort);
    

   

class CovidData extends React.Component{
    constructor(props){
        super(props)

        }
    
    render(){
        return(
            <div>
                <h1>
                    Global New Cases
                </h1>
                <ul>             
                    <li>
                    <span>Country</span>
                    <span>Newconfirm</span>
                    <span>Comfirm</span>
                    <span>Heal</span>
                    <span>Death</span>
                        
                        </li>
                        {   
                            this.props.list.map((item,index)=>{
                                return (
                                    <li>
                                        <span>{item.country}</span>
                                        <span>{item.nowConfirm}</span>
                                        <span>{item.confirm}</span>
                                        <span>{item.heal}</span>
                                        <span>{item.dead}</span>
                                    </li>
                                
                                    
                                )
                            })
                        }
                    
                </ul>
            </div>
        )

    }

}

class Covid extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <CovidData list={dataArrSort} />
            </div>
        )
    }
    
}




export default Covid;