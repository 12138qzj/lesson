import React from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

function CommentApp(){
    return (
        <div className='wrapper'>
            <CommentInput/>
            <CommentList/>
            CommentApp
        </div>
    )
}
export default CommentApp;