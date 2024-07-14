import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onloadComments,onStartLoading,onAddNewComment
} from "../Store/comments/commentsSlice";
import { getCommentsByProduct } from "../Comentarios/Helpers/getCommentsByProduct";
import { addNewComment } from "../Comentarios/Helpers/addNewComment";


export const useCommentsStore = () => {
  //Se obtienen los comentarios y sus funciones del estado global de redux
  const { comments,isLoadingComments} = useSelector((state) => state.comments);
  
  const dispatch = useDispatch();



  const startLoadingComments = async (productId) => {
    try {
        //Se hace la peticion al backend para obtener los comentarios
    dispatch(onStartLoading());

    const jsonData = await getCommentsByProduct(productId)
    //Una vez obtenidos los comentarios,estos se guardan en el estado global de los comentarios
    dispatch(onloadComments(jsonData));

      
    } catch (error) {
      throw error;
    }

  };

const addComment=async (comment)=>{
  try {
    const jsonData=await addNewComment(comment);
    // dispatch(onAddNewComment(comment))
    startLoadingComments(comment.product)
  } catch (error) {
    throw error;
  }

}

  return {
    comments,
    isLoadingComments,
    startLoadingComments,
    addComment
  };
};

