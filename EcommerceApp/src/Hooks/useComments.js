import React, { useState } from "react";
import { getCommentsByProduct } from "../Comentarios/Helpers/getCommentsByProduct";
import { addNewComment } from "../Comentarios/Helpers/addNewComment";

export const useComments = (productId) => {
  const [comments, setcomments] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const startLoadingComments = async () => {
    setisLoading(true);
    try {
      const data = await getCommentsByProduct(productId);
      setcomments(data);
      setisLoading(false);
    } catch (error) {
      throw error;
    } finally {
      setisLoading(false);
    }
  };

  const addComment = async (comment) => {
    try {
      await addNewComment(comment);
      await startLoadingComments();
    } catch (error) {
      throw error;
    }
  };

  return {
    isLoading,
    comments,
    startLoadingComments,
    addComment,
  };
};
