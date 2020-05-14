
import React, { Component } from 'react'
import Comment from './Comment.js'

class CommentList extends Component{
    render(){
        // this.props; 数据传过来的所有集合
        let {comments}=this.props;/*解构出内容  这是一个array*/
        // for(comments in i){

        console.log(comments,"值")
        // }
        console.log(comments,"-------")
            // {}:表示react运行区域
                    // return (
                    //     <div key={index}>
                    //         { comment.username}:{ comment.content}
                    //     </div>
                    // )
                    // this.props.comments 
                    return  (
                                <div>
                                    { comments.map((comment,index)=> <Comment comment={comment} key={index} /> 
                                    )}
                                </div>
                            )      
    }
}
export default CommentList;