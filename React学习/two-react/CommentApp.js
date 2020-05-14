// import React from 'react'

import React , {Component} from 'react';//按需求加载组件
// import CommentList

import CommentInput from './CommentInput';//导入模块
import CommentList from './CommentList';//导入模块


class CommentApp extends Component{
    constructor(){
        super();
        this.state={//自有的状态， setstatue ，用到相应的组件时 会自动刷新组件的值
            //响应式的开发
            comments:[{
                    username :'qiu',
                    content:'写代码'
                },{
                    username :'zai ',
                    content:'写代码haoma'       
        }]
        }
       
    }
    render(){
        return (
            <div className="wrapper">
                {/* 使用props将组件里面传出来的值获取 */}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
    handleSubmitComment(comment) {
        //console.log(comment);
        // console.log(this.comments)
        //this.state.comments.push(comment);
        // console.log('comment',comment)
   
        // console.log(this.state)


        // let {comments}=this.state;
        // comments.unshift(comment);
        // this.setState({//修改的相应的组件会更新
        //     comments:comments//更新值
        // })


        this.setState({//修改的相应的组件会更新
            comments:[comment , ...this.state.comments]//更新值
        })
    } 
}

// import CommentInput from './CommentInput'
// import CommentList from './CommentList'
// import './index.css'

// function CommentApp(){
//     return (
//         <div className='wrapper'>
//             <CommentInput/>
//             <CommentList/>
//             CommentApp
//         </div>
//     )
// }
 export default CommentApp;