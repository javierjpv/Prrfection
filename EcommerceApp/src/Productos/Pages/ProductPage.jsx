import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Helpers/getProductById";
import { ProductCard } from "../Components/ProductCard";
import { CommentList } from "../../Comentarios/Components/CommentList";
import { CommentNewForm } from "../../Comentarios/Components/CommentNewForm";
import { useAuthStore } from "../../Hooks/useAuthStore";
import { useComments } from "../../Hooks/useComments";
//pagina donde se muestran los productos dependiendo de su para bmetro id

export const ProductPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [commentTogle, setcommentTogle] = useState(false);
  const{comments,isLoading,startLoadingComments,addComment}=useComments(productId)



  useEffect(() => {
    startLoadingComments();
    console.log("SE LLAMA A LA API PARA CARGAR LOS COMENTARIOS");
  }, []);

  const handleCloseComment = () => {
    setcommentTogle(false);
  };

  const {user}=useAuthStore();
  return (
    <>
      <div className="d-flex justify-content-center">
        <ProductCard product={product} />
      </div>
      {isLoading ? (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {user.userState === "AUTHENTICATED" && (
            <button
              onClick={() => {
                setcommentTogle(true);
              }}
              className="btn btn-secondary"
            >
              Añadir Comentario
            </button>
          )}

          {commentTogle ? (
            <CommentNewForm
              handleCloseComment={handleCloseComment}
              productId={productId}
              addComment={addComment}
            />
          ) : (
            ""
          )}

          <CommentList comments={comments}/>
        </>
      )}
    </>
  );
};
