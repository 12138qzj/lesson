import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";


class Main extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){//生命周期：onload
        //当组件挂载完毕将会执行该函数
//      path:"/search/:searchTerm"
//      url:"/search/fsad"
        const params =this.props.match.params;
        console.log(this,"++++++++++++")
        const searchTerm=params.searchTerm || undefined;
        console.log(searchTerm,"----------")

        // this.loadBeeers(searchTerm)//去请求数据
         

    }
    render(){
        return(
            <div className="wrapper">
                <Header siteName="Beer me!" />
                <Link to="/about">About</Link>
            </div>
        )
    }
}
export default Main;