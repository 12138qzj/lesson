import React, { Component } from 'react'

class Commnet extends Component{
    render(){
        console.log(this.props)
        let {comment}=this.props;
        return(
           <div>
               {comment.username}:{comment.content}           
           </div>     
        )
    }
}
export default Commnet;