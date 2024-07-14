import React from 'react'
import { CommentItem } from './CommentItem'
import { useCommentsStore } from '../../Hooks/useCommentsStore'

export const CommentList = () => {
  console.log('se renderiza commentList')
  const {comments } =
  useCommentsStore();
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
}

