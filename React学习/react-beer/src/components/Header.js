import React  from "react";
import { Link } from "react-router-dom";

class Herder extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <h1>
                {/* 向外输出 */}
                {/* {this.props,siteName} */}
                <Link to="/"> {this.props.siteName}  </Link>
            </h1>
           
        )
    }
}

export default Herder;