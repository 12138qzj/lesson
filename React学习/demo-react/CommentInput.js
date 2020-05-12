import React from 'react'

function CommentInpur(){
    return (
       <div className="comment-input">
            <div className="commnet-field">
                <span className="comment-field-name">用户名：</span>
                <div className="comment-field-imnpu">
                    <input type="text"/>
                </div>
            </div>
            <div className="commnet-field">
                <span className="comment-field-name">评论内容：</span>
                <div className="comment-field-imnpu">
                    <input type="text"/>
                </div>
            </div>
            
       </div>
      
    )
}
export default CommentInpur;