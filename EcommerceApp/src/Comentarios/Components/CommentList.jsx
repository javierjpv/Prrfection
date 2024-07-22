import React from 'react'
import { CommentItem } from './CommentItem'


export const CommentList =React.memo( ({comments}) => {
  console.log('se renderiza commentList')
  return (
    <>
    <p className='text-dark mb-4 mt-5'>Opiniones de usuarios</p>
      {comments.map((comment) => (
        <div key={comment.id}>
            <CommentItem comment={comment}/>
        </div>
      ))}
    
  
    
    </>
  )
})

